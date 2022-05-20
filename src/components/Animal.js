import React from 'react';

import '../style/Home.css';

function Animal(props) {
    return (
        <div className="Animal">
          <img src={props.image} alt="" />
          <h2 className="normal-text bold color">{props.name}</h2>
          <p className="small-text">{props.description}</p>
        </div>
    )
}

export default Animal;