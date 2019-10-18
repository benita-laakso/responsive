import React from 'react';

const PersonComponent = (props) => {
  return (
  	<div>
  		<p>{props.person.name} is a {props.person.job} and is {props.person.age} years old!
  			<button onClick={() => props.removeSelf(props.person)} >remove</button>
  		</p>
  	</div>
  );
}

export default PersonComponent;
