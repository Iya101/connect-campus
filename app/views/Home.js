import React, { useState } from 'react';
import AddItem from '../components/AddItem/AddItem';
import ItemList from '../components/ItemList/ItemList';

const dummyPosts = [
    {
        id: 1,
        avatar: '/path/to/avatar1.jpg',
        username: 'User1',
        title: 'Post Title 1',
        content: 'Post content 1',
    },
    {
        id: 2,
        avatar: '/path/to/avatar2.jpg',
        username: 'User2',
        title: 'Post Title 2',
        content: 'Post content 2',
    },
    {
        id: 3,
        avatar: '/path/to/avatar3.jpg',
        username: 'User3',
        title: 'Post Title 3',
        content: 'Post content 3',
    },
];

const Home = () => {
  const [user, setUser] = useState(null); // Assuming this is for future use
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming this is for future use
  const [posts, setPosts] = useState(dummyPosts); // Set initial posts to dummy data
  const [showAddItem, setShowAddItem] = useState(false); // Controls visibility of AddItem

  const onAddHandler = (postData) => {
    // Assuming postData already contains { title: '', content: '' }
    setPosts((prevPosts) => [...prevPosts, { ...postData, id: prevPosts.length + 1 }]);
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

