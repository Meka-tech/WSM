import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route className="App">
          <Route path="/" element={<Homepage />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
