// import "./styles.css";
import { AuthProvider } from "./AuthContext";
import Pureplate from "./Pureplate/Pureplate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Pureplate />}>
            {/* </div> */}
            <Route path="/:id" element={<Restaurant />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
