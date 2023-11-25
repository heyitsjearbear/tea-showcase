import React from 'react';
import './Header.css'; // Import the CSS for the header

const Header: React.FC = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <a href="/" className="header-logo">Tea Showcase</a>
        <ul className="header-menu">
          <li><a href="#green">Green Tea</a></li>
          <li><a href="#black">Black Tea</a></li>
          <li><a href="#herbal">Herbal Tea</a></li>
          {/* Add more nav items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;