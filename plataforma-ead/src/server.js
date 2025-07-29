const express = require('express');
const cors = require('cors');
const routes = require('./routes/auth.routes'); // Vamos começar por aqui
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
