// 1. Carga las variables de entorno
require('dotenv').config();

// 2. Importa librerías
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 3. Middlewares (Permite que el servidor entienda JSON)
app.use(express.json());

// 4. Conexión a MongoDB
// Aquí usamos la variable que tienes en tu .env
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
    .then(() => console.log('✅ Conexión exitosa a MongoDB Atlas'))
    .catch((error) => console.error('❌ Error de conexión a MongoDB:', error));

// 5. Ruta de prueba
app.get('/', (req, res) => {
    res.send('El backend está funcionando y conectado.');
});

// 6. Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});