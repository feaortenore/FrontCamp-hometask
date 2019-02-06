const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/frontcamp', { useNewUrlParser: true });
const newSchema = new mongoose.Schema({ title: String, description: String })
module.exports = mongoose.model('News', newSchema)
