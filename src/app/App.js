import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

import "./App.css";




function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App
