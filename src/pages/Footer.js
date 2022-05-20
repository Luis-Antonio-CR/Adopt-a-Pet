import React from 'react';

import "../style/Footer.css";

import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1);
  }

  const goForward = () =>{
    navigate(1);
  }

  return (
    <div className="footer">
      <button onClick={ goBack } className="button small-text">Back</button>
      <button onClick={ goForward } className="button small-text">Forward</button>
    </div>
  )
}

export default Footer
