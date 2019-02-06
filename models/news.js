const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({ title: String, description: String })
module.exports = mongoose.model('News', newSchema)
