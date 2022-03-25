import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes className="App">
        <Route path="/" element={<Homepage />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
