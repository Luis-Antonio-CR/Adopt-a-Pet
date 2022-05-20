import React from 'react'
import { useSelector } from 'react-redux';

import { selectFlebloc } from '../features/Flebloc/fleblocSlice';

import { dataFlebloc } from '../data/data_Flebloc';

import Animal from '../components/Animal';

import "../style/Home.css";

function Flebloc() {
  const flebloc = Object.values( useSelector(selectFlebloc));

  return (
    <div className="main">
      <div className="box_1" >
        <h1 className="big-text">Flebloc</h1>
        <h2 className="normal-text">They are from nowhere and they'll never leave you alone. NEVER!</h2>
      </div>
      <div className="box_animals">
        { flebloc.map( data =>{
          return <Animal name={data.name} image={data.image} description={data.description} />
        })}
      </div>
      <div className="box_end"></div>
    </div>
  )
}

export default Flebloc
