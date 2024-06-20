import AuthProvider from "./context/AuthContext";
import Pureplate from "./pages/Main/Main.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";
import FeedbackPage from "./pages/Feedback/FeedbackPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Pureplate />}>
            <Route path=":id" element={<Restaurant id="0" none="none" />} />
            <Route path="feedback" element={<FeedbackPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
