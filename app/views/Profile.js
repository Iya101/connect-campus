"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile({ user, onUpdateUser }) {
  // Initialize editUser state with safeguards for undefined user properties
  const [editUser, setEditUser] = useState({
    username: user?.username || 'Default User', // Defaulting to prevent undefined errors
    ...user
  });

  useEffect(() => {
    // Update state only if user is defined
    if (user) {
      setEditUser({
        username: user.username || 'Default User',
        ...user
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example endpoint URL: Adjust to match your server's configuration
    const endpoint = 'http://localhost:8082/api/users/update-username';
    
    axios.post(endpoint, { userId: editUser.userId, newUsername: editUser.username })
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        onUpdateUser({ ...user, username: editUser.username });
      })
      .catch(error => {
        console.error('Failed to update profile:', error);
      });

  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="usernameText">Username:</label>
          <input
            type="text"
            name="username"
            value={editUser.username}
            onChange={handleChange}
            id="usernameText"
            className="profile-input"
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" id="profileButton" className="profile-update-button">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
