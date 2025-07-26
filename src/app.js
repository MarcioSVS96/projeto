const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes'); // Corrigido para 'courseRoutes'
// const moduloRoutes = require('./routes/moduloRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rota de "saúde" para verificar se a API está no ar
app.get('/health', (req, res) => res.status(200).send('API is running!'));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes); // Corrigido para 'courses'
// app.use('/api/modulos', moduloRoutes);

module.exports = app; // Apenas exporta o app
