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
        ref: 'User' // Reference to User model
    }
});

module.exports = mongoose.model('Flight', flightSchema);
