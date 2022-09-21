import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
var images = new Array();
for (const animal in animals){
  images.push(<img key={animal} className='animal' alt ={animal} 
  src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />)
}
const background = (<img className="background" src="/images/ocean.jpg" alt="ocean"/>);
const animalFacts = (<h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>);
const showBackground = Math.random() > 0.5 ? true : false;
const mainDiv = (
  <div>
    {animalFacts}
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e){
  var name = e.target.alt;
  const indxRandom = Math.floor(Math.random() * animals[name].facts.length);
  var funfact = animals[name].facts[indxRandom];
  document.getElementById('fact').innerHTML= funfact;
}
ReactDOM.render(mainDiv, document.getElementById("root"));

