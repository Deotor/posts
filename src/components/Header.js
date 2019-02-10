import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Posts-app</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-post">Add-post</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
