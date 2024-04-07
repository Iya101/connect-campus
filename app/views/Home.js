import React, { useState } from 'react';
import AddItem from '../components/AddItem/AddItem';
import ItemList from '../components/ItemList/ItemList';

const Home = () => {
  const [user, setUser] = useState(null); // Assuming this is for future use
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming this is for future use
  const [posts, setPosts] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false); // Controls visibility of AddItem

  const onAddHandler = (postData) => {
    // Assuming postData already contains { title: '', content: '' }
    setPosts((prevPosts) => [...prevPosts, postData]);
  };

  const onCloseHandler = () => {
    setShowAddItem(false); // Hides the AddItem component
  };

  const toggleAddItem = () => {
    setShowAddItem((prevState) => !prevState); // Toggles visibility
  };

  return (
    <div>
      {isLoggedIn && <button onClick={toggleAddItem}>Add New Post</button>}
      {showAddItem && <AddItem onAdd={onAddHandler} onClose={onCloseHandler} user={user} />}
      <ItemList posts={posts} />
    </div>
  );
};

export default Home;
