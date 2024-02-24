import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SpeechRecognitionPage from "./components/pages/SpeechRecognitionPage";
import IOT from "./components/pages/IOT";
import Register from "./components/pages/Register";
import SpeechComponent from "./components/pages/SpeechComponent";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route exact path="/speechToText" element={<SpeechComponent />} />
          <Route exact path="/IOT" element={<IOT />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
