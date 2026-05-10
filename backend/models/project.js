const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  titulo:      { type: String, required: true },
  descripcion: { type: String, required: true },
  tecnologias: [String],
  github:      String,
  demo:        String,
  imagen:      String,
  destacado:   { type: Boolean, default: false }
});

module.exports = mongoose.model('project', projectSchema);