import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <button type="button" className="btn btn-outline-light mr-4 mb-2">
          <NavLink to="/" className="navLink">Profile</NavLink>
        </button>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/todo" className="navLink">To Do App</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2">
                <NavLink to="/burger" className="navLink">Burger App</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light mr-3 mb-2"> </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;