import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      <div>
        <div>
          {/* Link is the React Router way of navigating to other parts of your app. */}
          {/* Use this instead of <a/> tags */}
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/signin">SignIn</Link>
          
        </div>
      </div>
    )
  }

export default NavBar;