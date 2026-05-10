const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const message = require('./models/message');
const project = require('./models/project');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err));

// ─── RUTAS PROYECTOS ────────────────────────────────
// Obtener todos los proyectos
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await project.find().sort({ destacado: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

// Crear proyecto (para añadir los tuyos)
app.post('/api/projects', async (req, res) => {
  try {
    const project = new project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear proyecto' });
  }
});

// ─── RUTAS CONTACTO ────────────────────────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    const nuevoMensaje = new message({ nombre, email, mensaje });
    await nuevoMensaje.save();

    res.json({ ok: true, mensaje: '¡Mensaje enviado!' });
  } catch (err) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await message.find().sort({ fecha: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${process.env.PORT}`);
});