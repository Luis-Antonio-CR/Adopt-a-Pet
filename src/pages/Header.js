import React from 'react';
import "../style/Header.css"

import { NavLink, Link } from "react-router-dom";

import LogoImg from "../assets/logo.png";



function Header() {
  return (
    <div className="header">
      <Link to="/"><img src={LogoImg}/></Link>
      
      <nav >
        <NavLink to="/" className="normal-text tw"> All </NavLink>
        <NavLink to="/Flastat" className="normal-text tw"> Flastat </NavLink>
        <NavLink to="/Flebloc" className="normal-text tw"> Flebloc </NavLink>
        <NavLink to="/Floddic" className="normal-text tw"> Floddic </NavLink>
      </nav>
    </div>
  )
}

export default Header
