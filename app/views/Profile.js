"use client";
import React, { useState, useEffect } from 'react';

function Profile({ user, onUpdateUser }) {
  // Initialize editUser state with safeguards for undefined user properties
  const [editUser, setEditUser] = useState({
    username: user?.username || 'defaultUsername', // Defaulting to prevent undefined errors
    ...user
  });

  useEffect(() => {
    // Update state only if user is defined
    if (user) {
      setEditUser({
        username: user.username || 'defaultUsername',
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
    onUpdateUser(editUser);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={editUser.username} // Safely accessing username
            onChange={handleChange}
          />
        </label>
        {/* Add other fields as necessary */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;

