import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo" />
      <span className="navbar_logo_name">IRIS</span>
      <div className="navbar_search">
        <input className="navbar_search_input" type="search" placeholder="Looking for a specific post?" />
      </div>
      <p className="navbar_link1">Cases</p>
      <p className="navbar_link2">About</p>
      <p className="navbar_link3">Contact</p>
    </div>
  );
}

export default Navbar;
