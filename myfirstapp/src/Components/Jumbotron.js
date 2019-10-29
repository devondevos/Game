import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
<div className="jumbotron">
{/*insert the paragraph that will show here, on the header*/}
  <h1>Simpsons and Family Guy<br/>React Memory Game!</h1>
  <p>Pick a new character image everytime.</p>
{/*here will display the scores and highscore*/}
  <p>Score: {props.score} <span> High Score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;