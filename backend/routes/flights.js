const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight'); // Replace with your actual model

// POST request to add a flight
router.post('/', async (req, res) => {
  try {
    const flight = new Flight({
      name: req.body.name,
      // other flight properties
    });
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    console.error('Error adding flight:', error);
    res.status(500).json({ error: 'Failed to add flight' });
  }
});

module.exports = router;
