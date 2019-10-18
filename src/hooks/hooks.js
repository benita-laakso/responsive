import React, {useState} from 'react';
//UseState is a Hook
//returns a pair: the current state value and a function that lets you update it.
function Hooks() {
  const [count, setCount] = useState(0);
//Declaring a variable that we call count
  return (
    <div className="main">
    <p> You clicked {count} times</p>
    <button onClick={() => setCount(count+
      1)}>
    Click me
    </button>
    </div>
);
}

export default Hooks;
