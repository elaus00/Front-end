import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (id, password) => {
    try {
      const response = await axios.post("http://yourbackend.com/api/login", {
        id,
        password,
      });
      // 요청 성공 후 응답에서 사용자 정보를 가져와 상태를 업데이트합니다.
      setUser(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      // 에러 처리를 개선합니다.
      if (error.response) {
        // 서버 응답이 있는 경우, 서버에서 보낸 오류 메시지를 사용합니다.
        console.error("로그인 실패:", error.response.data);
      } else {
        // 서버 응답이 없는 경우, 예를 들어 네트워크 문제 등
        console.error("요청 처리 중 문제가 발생했습니다.", error.message);
      }
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
