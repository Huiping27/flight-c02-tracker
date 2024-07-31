const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // User fields (e.g., name, email, password)
});

module.exports = mongoose.model('User', userSchema);
