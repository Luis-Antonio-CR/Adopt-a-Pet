import React from 'react'
import { useSelector } from "react-redux"
import { selectFlastat } from '../features/Flastat/flastatSlice';

import { dataFlastat } from '../data/data_Flastat';

import Animal from '../components/Animal';

import "../style/Home.css";

function Flastat() {
  const flastat = Object.values(useSelector(selectFlastat));

  return (
    <div className="main">
      <div className="box_1">
        <h1 className="big-text">Flastat</h1>
        <h2 className="normal-text">From the lands of Flasnoun with a revoulting smell of death.</h2>
      </div>
      <div className="box_animals">
        { flastat.map( data =>{
          return <Animal  name={data.name} image={data.image} description={data.description} />
        })}
        
      </div>
      <div className="box_end"></div>
    </div>
  )
}

export default Flastat
