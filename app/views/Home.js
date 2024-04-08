import React, { useState } from 'react';
import AddItem from '../components/AddItem/AddItem';
import ItemList from '../components/ItemList/ItemList';

const dummyPosts = [
  {
      id: 1,
      avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712550709/avatar1_tatwp2.png',
      username: 'eva_daniel',
      title: 'CS Elective Course Recommendations',
      content: 'I need 1 more elective. Does anyone have any recommendations for easy CSCI 4000 level electives?',
      tags: ['tag1', 'tag2'],
      comments: [] // Add an empty array for comments
  },
  {
      id: 2,
      avatar: '/path/to/avatar2.jpg',
      username: 'User2',
      title: 'Post Title 2',
      content: 'Post content 2',
      tags: ['tag2', 'tag3'],
      comments: []
  },
  {
      id: 3,
      avatar: '/path/to/avatar3.jpg',
      username: 'User3',
      title: 'Post Title 3',
      content: 'Post content 3',
      tags: ['tag1', 'tag3'],
      comments: []
  },
];


const Home = () => {
  const [user, setUser] = useState(null); // Assuming this is for future use
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming this is for future use
  const [posts, setPosts] = useState(dummyPosts); // Set initial posts to dummy data
  const [showAddItem, setShowAddItem] = useState(false); // Controls visibility of AddItem

  const onAddHandler = (postData) => {
    const newPost = {
        ...postData,
        id: posts.length + 1,
        tags: postData.tags.split(',').map(tag => tag.trim()), // Convert tags string to array
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
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

