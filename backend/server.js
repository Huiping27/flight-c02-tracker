const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Add helmet for security
const flightRoutes = require('./routes/flights');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(helmet());
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

// MongoDB connection with error handling
mongoose.connect('mongodb://localhost:27017/flightco2tracker')
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on failure
  });


