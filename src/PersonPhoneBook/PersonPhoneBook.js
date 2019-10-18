import React, { Component } from "react";

import peopleFile from "./peopleFile";
import PersonComponent from "./PersonComponent";

class PersonPhoneBook extends Component {

    state = {
        people: peopleFile
    };

    removePerson = (person) => {
    	// create a copy of the array
    	var newArrayOfPeople = [...this.state.people];

    	// get the index of the person who is to be removed
    	var index = newArrayOfPeople.indexOf(person);

    	// remove them
    	newArrayOfPeople.splice(index, 1);

    	// update the state
    	this.setState({
    		people: newArrayOfPeople
    	})
    };

    render() {
        return (
          // map Loops through every element in an Array
          // and assigns it to the variable "personObj"
          //personObj is where we are at in the loop
            <div className="main">
            	{this.state.people.map(personObj => (
            		<PersonComponent person={personObj} key={personObj.id} removeSelf={this.removePerson} />
            	))}
	    	</div>
        );
    }
}


export default PersonPhoneBook;
