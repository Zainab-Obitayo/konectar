const express = require('express');
const bodyParser = require('body-parser');


// Initialize express instance
const app = express(); 

// Import routes
const userRouter = require('./routes/userRoute');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Konectar' });
  });
  

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


module.exports= app;

