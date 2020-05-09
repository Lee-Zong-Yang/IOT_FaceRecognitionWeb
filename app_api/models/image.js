const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  status: String,
  url: String 
});

mongoose.model('Image', imageSchema);