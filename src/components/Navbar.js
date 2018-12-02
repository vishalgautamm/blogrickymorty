import React, { Component } from 'react'
import Button from './Button'
import StyledLink from '../components/StyledLink'

class Navbar extends Component {
  render () {
    return (
      <nav
        className='navbar navbar-expand-lg  '
        id='mainNav'
        style={{
          marginBottom: '2rem',
          height: '80px',
          backgroundColor: 'white',
          width: '100%'
        }}
      >
        <Button link>
          <StyledLink to='/home'>Home </StyledLink>
        </Button>
        <Button link>
          <StyledLink to='/characters'>Characters</StyledLink>
        </Button>
      </nav>
    )
  }
}

export default Navbar
