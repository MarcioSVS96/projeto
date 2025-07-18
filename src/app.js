const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const moduloRoutes = require('./routes/moduloRoutes');
const testRoutes = require('./routes/test');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.use('/test', testRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/modulos', moduloRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
