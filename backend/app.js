const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();
const userRoutes = require('./routes/UserRoutes');
app.use('/api/users', userRoutes);
app.use(cors());
app.use(express.json()); // to parse JSON bodies



// MongoDB connection string
const conn_str = 'mongodb+srv://Admin:Password123@campusconnect.rnnii0k.mongodb.net/?retryWrites=true&w=majority&appName=CampusConnect';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
    .then(() => {
        console.log(`MongoDB Connection Succeeded`);
        const port = process.env.PORT || 8082;
        // Start listening for requests only after the database connection is successful
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch(err => {
        console.log(`Error in DB Connection ${err}`);
    });
    const posts = require('./routes/PostRoutes');
    app.use('/PostRoutes', posts);

    const comments = require('./routes/CommentRoutes');
    app.use('/CommentRoutes', comments);