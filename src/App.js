// import "./styles.css";
import Pureplate from "./Pureplate/Pureplate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Pureplate />
      </div>
    </Router>
  );
}

export default App;
