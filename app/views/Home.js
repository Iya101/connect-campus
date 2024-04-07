import React, { useState } from 'react';
import AddItem from '../components/AddItem/AddItem';
import ItemList from '../components/ItemList/ItemList';

const Home = () => {
  const [user, setUser] = useState(null); // User state to store login status
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [posts, setPost] = useState([]);

  const onAddHandler = (postData) => {
    setPost((prevPost) => [...prevPost, postData]);
  };

  return (
    <div>
      <AddItem onAdd={onAddHandler} user={user} />
      <ItemList posts={posts} />
    </div>  
  );
}

export default Home;


// import React, { useState } from 'react';
// import AddItem from './AddItem/AddItem';

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [showAddItem, setShowAddItem] = useState(false);
//   const [user, setUser] = useState(null);

//   const addPostHandler = ()

//   const handleSubmit = (event) => {
//       event.preventDefault(); // Prevent the default form submission behavior
//       console.log('Logging in with:', email, password);
//       // Here you would typically handle the login logic, 
//       // e.g., sending a request to your backend
//   };

//   return (
//   }
// }

//   export default function Home() {
//     return <div>Home Page</div>;
//   }
// }