import PracticalTaskCode from "./PracticalTask/PracticalTaskCode";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/practical-task" element={<PracticalTaskCode />} />
      </Routes>
    </Router>
  );
}

export default App;
