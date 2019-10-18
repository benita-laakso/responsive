import React from 'react';
import Header from './header/header';
import './App.css';
import About from './about/about';
import Hobbies from './hobbies/hobbies';
import Footer from './footer/footer';
import Hooks from './hooks/hooks';
import PersonPhoneBook from './PersonPhoneBook/PersonPhoneBook';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
<Header/>
{/*exact path = what will be displayed in the browser
  The link to in the header component makes the link work ex.<Link to="/about">*/}
<Route exact path="/" component={PersonPhoneBook}/>
<Route exact path="/about" component={About} />
<Route exact path="/hobbies" component={Hobbies} />
<Route exact path="/hooks" component={Hooks} />
</Router>
<Footer/>
    </div>
  );
}

export default App;
