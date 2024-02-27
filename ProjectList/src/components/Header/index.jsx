import React, { useState } from 'react';
import './index.css';

const Header = () => {
  const [logoText, setLogoText] = useState('RA');

  const handleLogoClick = () => {
    // You can add logic here for handling logo click if needed
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <p className="website-logo" onClick={handleLogoClick}>
          {logoText}
        </p>
        <ul className="nav-menu">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="LinkedIn"
            />
          </li>
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="GitHub"
            />
          </li>
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
