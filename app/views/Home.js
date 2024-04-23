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
      comments: [] 
  },
  {
      id: 2,
      avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712594491/avatar2_lvpwlu.webp',
      username: 'example_username',
      title: 'Best CS Clubs',
      content: 'What are the best CS clubs to join for networking experience?',
      tags: ['tag2', 'tag3'],
      comments: []
  },
  {
      id: 3,
      avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712594708/avatar3_yveogm.webp',
      username: 'User3',
      title: 'MIS or CS',
      content: 'I am currently a freshman studying MIS and idk if I should stick with MIS or switch to CS. Any advice?',
      tags: ['tag1', 'tag3'],
      comments: []
  },
];


const Home = ({ isLoggedIn }) => {
  const [user, setUser] = useState(null); 
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [posts, setPosts] = useState(dummyPosts); 
  const [showAddItem, setShowAddItem] = useState(false); // Controls visibility of AddItem
  const [isHovered, setIsHovered] = useState(false);

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
  
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '20px auto 0',
    display: 'block',
    border: '2px solid red',
    borderRadius: '8px',
    backgroundColor: isHovered ? '#cc0000' : '#ff0000',
    color: 'white',
    transition: 'background-color 0.3s'
  };
  return (
    <div>
      {isLoggedIn && (
        <button
          onClick={toggleAddItem}
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Add New Post
        </button>
      )}
      {showAddItem && <AddItem onAdd={onAddHandler} onClose={onCloseHandler} user={user} />}
      <ItemList posts={posts} />
    </div>
  );
};

export default Home;

