import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const signUp = async (id, password) => {
    try {
      // 서버에 회원가입 요청을 보냅니다.
      const response = await axios.post("/api/signup", { id, password });
      // 회원가입 성공 처리...
    } catch (error) {
      // 오류 처리...
      console.error("SignUp failed:", error);
    }
  };
  const value = {
    isLoggedIn,
    login,
    logout,
    signUp,
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
