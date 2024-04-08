"use client";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
      <div className="logo-and-title"> {/* Add this wrapper */}
      <img 
        src="https://cdn.gencraft.com/prod/user/568c8dc4-2af3-4b88-9aac-bd41c2ca4b8a/cb54135b-f4f1-4d14-b4ad-5e6d0a5bce98/image/image0_0.jpg?Expires=1712696307&Signature=kj637aEIEULvArx51c02nfNSAhtIB7h2ZDaXzEp21f2~js2TE~b1oMxx6juTOX3i8A5ylhh3bg1BV0IQi8wX0Gkd3AJr13ESruPk7YxkJcFcPpp-pMvFZNpDSPiQQfv-6fZhoYsDOaqIYM5VamGg9bH2CSSf8173vggmkzUEJVsLaSB8oRDZGa~Tc-mNeboDNj3mjodoh7n9y8O1tGXrmkbgTt7tB0-StOom633lhQN1v--P7-WcA0scHXYcpb009gXF2wTuFDYDZ8m-FOKmrLWMlNRig6MgDImniVl60y81QRUCJGCHhuTB2PIHXFQHusQaiCZ~O8hFQpNNir-jnw__&Key-Pair-Id=K3RDDB1TZ8BHT8" 
        alt="Campus Connect Logo" 
        className="header-logo"
      />
      <h1>Campus Connect</h1>
    </div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/auth">Login / Signup</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
