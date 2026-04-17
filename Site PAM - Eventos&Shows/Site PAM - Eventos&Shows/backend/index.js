const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cepRoutes = require('./routes/cep');

// Lê variáveis de ambiente do arquivo .env para configurar a aplicação.
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Permite que o frontend acesse o backend de outro domínio/porta.
app.use(cors());

// Converte requisições JSON em objetos JS em req.body.
app.use(express.json());

// Define as rotas da API, organizando em módulos separados.
app.use('/auth', authRoutes);
app.use('/cep', cepRoutes);

// Rota de saúde simples para verificar se o backend está rodando.
app.get('/', (req, res) => {
  res.send({ message: 'API backend funcionando!' });
});

// Inicia o servidor HTTP na porta configurada.
const server = app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Porta ${port} já está em uso. Pare o processo existente ou defina PORT em .env para outra porta.`);
    process.exit(1);
  }
  throw error;
});
