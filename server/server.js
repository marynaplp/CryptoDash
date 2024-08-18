const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/favoriteRoutes');  // Import user routes
const favoriteRoutes = require('./routes/favoriteRoutes');  
const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);  
app.use('/favorites', favoriteRoutes);  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
