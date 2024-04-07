// Import React and any other libraries you might need
import React from 'react';
// Import the CSS file for styling
import './Header.css';

import Link from 'next/link';
import styles from './Header.module.css';

// Define the Header component
function Header() {
  return (
    <header className="header">
      <h1>Campus Connect</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Export the Header component
export default Header;
