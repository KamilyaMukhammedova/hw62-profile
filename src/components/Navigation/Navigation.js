import React from 'react';

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <a className="navbar-brand" href="#">Profile</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;