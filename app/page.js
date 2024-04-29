"use client"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home';
import Auth from './views/Auth';
import Error from './views/Error';
import AddItem from './components/AddItem/AddItem';
import Profile from './views/Profile';

function App() {
  // Initialize user state with a default username
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({
    username: generateRandomUsername(10), // Function to generate a random username
    otherInfo: {}
  });

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // Set user data upon login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({
      username: generateRandomUsername(10), // Reset username upon logout
      otherInfo: {}     
    });
  };
  

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} user={user} />} />
          <Route path="/auth" element={ <Auth onLogin={handleLogin} username={username} setUsername={setUsername} />} />
          <Route path="/error" element={<Error></Error>} />
          {isLoggedIn && (
            <>
              <Route path="/profile" element={<Profile user={user} onUpdateUser={setUser} />} />
              <Route path="/add-item" element={<AddItem />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

// Helper function to generate a random username
function generateRandomUsername(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default App;


