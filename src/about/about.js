import React from 'react';
import data from  '../data';
import './about.css';

function About() {
  const picatures = data;
  return (
    <div className="about">
      <h1>About</h1>
      <div className="picContainer">

  {picatures.map(pic =>(
    <div className="picDiv">
  <img className="pic" src ={pic.image}/>
    </div>
  ))}
</div>
    </div>

  );
}

export default About;
