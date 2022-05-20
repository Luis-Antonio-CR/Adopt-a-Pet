import React from 'react'
import { useSelector } from 'react-redux';

import { selectFLoddic } from '../features/Floddic/floddicSlice';

import { dataFloddic } from '../data/data_Floddic';

import Animal from '../components/Animal';

import "../style/Home.css";

function Floddic() {
  const floddic = Object.values( useSelector(selectFLoddic));

  return (
    <div className="main">
      <div className="box_1" >
        <h1 className="big-text">Floddic</h1>
        <h2 className="normal-text">They live in the coldest parts of the world with nothing else than thier guns.</h2>
      </div>
      <div className="box_animals">
        {floddic.map( data => {
          return <Animal image={data.image} name={data.name} description={data.description} />
        })}
      </div>
      <div className="box_end"></div>
    </div>
  )
}

export default Floddic
