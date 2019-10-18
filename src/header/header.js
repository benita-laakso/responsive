import React from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () =>{
return(<div className="header">
         <nav>
              <ul>
                  <li>
                      <a href="/">Home</a>
                  </li>
                  <li>
                      <a href="https://github.com/benita-laakso">GitHub</a>
                  </li>
              </ul>
              <ul>
                  <li>{/**/}
                       <Link to="/hobbies">
                         Hobbies
                           </Link>

                  </li>
                  <li>
                    <Link to="/about"> About</Link>

                  </li>
                  <li>
                      <Link to="/hooks">Hooks</Link>
                  </li>
              </ul>
          </nav>
   </div>
);

}
 export default Header;
