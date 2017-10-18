import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
a {
  text-decoration: none;
  font-family: "Bree Serif", sans-serif;
  color: black;
}
`

const NavBar = () => {
    return (
      <NavContainer>
        <div>
          {/* Link is the React Router way of navigating to other parts of your app. */}
          {/* Use this instead of <a/> tags */}
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/about">about</Link>  
        </div>
        <div>
          <Link to="/pies">pies</Link>
          
        </div>
        <div>
          <Link to="/custom">custom</Link>  
        </div>
        <div>
          <Link to="/users">users</Link>  
        </div>
      </NavContainer>
    )
  }

export default NavBar;