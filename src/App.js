// import "./styles.css";
import { AuthProvider } from "./AuthContext";
import Pureplate from "./Pureplate/Pureplate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
import Feedback from "./Feedback/Feedback";
import FeedbackPage from "./FeedbackPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Pureplate />}>
            <Route path=":id" element={<Restaurant none="none" />} />
            <Route path="feedback" element={<FeedbackPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
