const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email:  { type: String, required: true },
  mensaje:{ type: String, required: true },
  fecha:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', messageSchema);