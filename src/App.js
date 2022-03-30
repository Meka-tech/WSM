import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route className="App">
          <Route path="/" element={<Homepage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
