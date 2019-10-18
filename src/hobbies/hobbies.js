import React from 'react';
import data from '../data';
import './hobbies.css';

function Hobbies() {
    const hobbies = data;

  return (

    <div className="hobbies">
    <h1> Hobbies</h1>
    {hobbies.map(item => (
<div>

{item.text}
</div>
))}
    </div>
  );
}

export default Hobbies;
