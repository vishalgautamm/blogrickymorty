import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (      
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="mainNav">
          <div className="container">
            
            
            <div className="" >
              <ul className="navbar-nav mr-auto">
	              <li className="nav-item mr-1"><Link to="/home">Home  </Link></li>
	              <li className="nav-item"><Link to="/characters">Characters</Link></li>
              </ul>
            </div>
          </div>
        </nav>



    
    );
  }
}



export default Navbar;
