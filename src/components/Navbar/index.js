import React from 'react'
import {Nav, NavLink, NavContainer} from './NavbarElements'

const Navbar = () => {
  return (
    <NavContainer>
        <Nav>
        <NavLink to='/'>Antonio Bruno Wingert</NavLink>
        </Nav>
    </NavContainer>
   
   )
}

export default Navbar