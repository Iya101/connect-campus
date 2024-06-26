import React, { useState, useEffect } from 'react';
import AddItem from '../components/AddItem/AddItem';
import ItemList from '../components/ItemList/ItemList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const dummyPosts = [
  {
    id: 1,
    avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712550709/avatar1_tatwp2.png',
    username: 'this_user',
    title: 'CS Elective Course Recommendations',
    content: 'I need 1 more elective. Does anyone have any recommendations for easy CSCI 4000 level electives?',
    tags: ['tag1', 'tag2'],
    comments: [] 
  },
  {
    id: 2,
    avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712594491/avatar2_lvpwlu.webp',
    username: 'that_user',
    title: 'Best CS Clubs',
    content: 'What are the best CS clubs to join for networking experience?',
    tags: ['tag2', 'tag3'],
    comments: []
  },
  {
    id: 3,
    avatar: 'https://res.cloudinary.com/dcrv4owpp/image/upload/v1712594708/avatar3_yveogm.webp',
    username: 'other_user',
    title: 'MIS or CS',
    content: 'I am currently a freshman studying MIS and idk if I should stick with MIS or switch to CS. Any advice?',
    tags: ['tag1', 'tag3'],
    comments: []
  },
];

const Home = ({ isLoggedIn, user }) => {
  const [posts, setPosts] = useState([]); 
  const [showAddItem, setShowAddItem] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8082/PostRoutes');
        setPosts(response.data);
      } catch (err) {
        navigate('/error');
        console.error('Unable to get posts.', err);
      }
    };

    // Gets new posts every second
    const interval = setInterval(() => {
      getPosts();
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  /*
  const onAddHandler = (postData) => {
    const newPost = {
      ...postData,
      id: posts.length + 1,
      avatar: postData.avatar || 'https://default-avatar.png', // Default or use specific avatar if not provided
      username: 'Default User', // You can adjust this based on actual logged-in user info
      tags: postData.tags.split(',').map(tag => tag.trim()),
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  */

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8082/PostRoutes/${postId}`);
      setPosts((prevPosts) => prevPosts.filter(post => post._id !== postId));
    } catch (err) {
      navigate('/error');
      console.error('Unable to delete post.', err);
    }
  };

  const toggleAddItem = () => {
    setShowAddItem((prevState) => !prevState);
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
      {showAddItem && <AddItem onClose={() => setShowAddItem(false)} />}       {/* removed onAdd={onAddHandler} */}
      <ItemList posts={posts} isLoggedIn={isLoggedIn} user={user} onDelete={handleDelete} />
    </div>
  );
};

export default Home;

