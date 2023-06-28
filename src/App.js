import React from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  );
};
export default App;
