import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      
        <nav className="" >                    
            <li className=""><Link to="/home">Home</Link></li>
            <li className=""><Link to="/characters">Characters</Link></li>
        </nav>
    
    );
  }
}



export default Navbar;
