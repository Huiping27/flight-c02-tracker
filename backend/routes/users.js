// models/Flight.js
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departure: String,
    arrival: String,
    distance: Number,
    class: String,
    passengers: Number,
    co2Emission: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Flight', flightSchema);

// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // User fields (e.g., email, password, name)
});

module.exports = mongoose.model('User', userSchema);

// routes/flights.js
const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// ... flight-related routes

module.exports = router;

// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ... user-related routes

module.exports = router;

// index.js (or main app file)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flightRoutes = require('./routes/flights');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/flights', flightRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/flightco2tracker')
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on failure
  });



