// File: server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.use('/users', userRoutes);
app.use('/favorites', favoriteRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

