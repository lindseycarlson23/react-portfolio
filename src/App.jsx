import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="portfolio-app">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Footer /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
