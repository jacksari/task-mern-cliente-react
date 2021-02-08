import React from 'react';
import { Link } from 'react-router-dom';

function HeaderHome() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header ">
          <div className="nav-logo">
            <p>
              Jack
              <span>Sari</span>
            </p>
          </div>
          <button type="button" className="nav-btn" id="nav-btn">
            <i className="fas fa-bars" />
          </button>
        </div>
        <ul className="nav-links ">
          <Link to="/">Home</Link>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderHome;
