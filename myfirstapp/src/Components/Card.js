import React from 'react';
import './Card.css';

const onClick = (props) => {
  props.randomCards();
  props.updateScore(props.id);
}

const Card = (props) => (
    <div className="cards">
      {/*call the onClick function created here*/}
      <a className="thumbnail" onClick={() => onClick(props)}>
        {/*call the image stored in the json file here*/}
        <img src={props.image} />
        }
      </a>
 </div>
)

export default Card