import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// outlet is a built-in component that helps with react routing
import { Outlet } from 'react-router-dom';

import Nav from "./components/Nav";
// import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Nav />
      <Outlet />
        
      
    </>
  );
}

export default App;
