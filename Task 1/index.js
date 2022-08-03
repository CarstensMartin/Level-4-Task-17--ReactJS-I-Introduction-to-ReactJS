import React from 'react';
import ReactDOM from 'react-dom';

// Create element to be displayed
// Local date & time
// Image of me with link to github account
// Bullet point summary of the advantages of JS frameworks over vanilla JS
const element = ( < div >
  <h1> Martin Carstens</h1>

  <h2> The date and time is {new Date().toLocaleString("en-US", {day: '2-digit'})} 
  {new Date().toLocaleString("en-US", {month: "long"})} 
  {new Date().getFullYear()} - {new Date().toLocaleTimeString()}. </h2>

  <a href = "https://github.com/CarstensMartin/" rel="noreferrer"  target="_blank">
    <img src = {require('./photo.jpg')}
    alt = "profile of Martin Carstens"
    width = "10%"/>
  </a>

  <h2> <u> Advantages of <b> JS frameworks </b> over <b>Vanilla JS</b > </u></h2>
  
  <ul>
    <li>Faster Speed</li>
    <li>More Flexibility</li>
    <li>Bette Performance</li>
    <li>It helps to build rich user interfaces</li>
  </ul>

  <a href="https://taglineinfotech.com/react-js-vs-vanilla-js/" rel="noreferrer"  target="_blank">
   <p>source: https://taglineinfotech.com/react-js-vs-vanilla-js/</p>
  </a>
  <br></br>
   
  </div>
);

//Render the element in the document
ReactDOM.render(element, document.getElementById('root'));