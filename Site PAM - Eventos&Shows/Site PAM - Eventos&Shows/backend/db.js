// Configuração do banco de dados PostgreSQL usando a variável de ambiente DATABASE_URL.
// A conexão é criada com Pool para reutilizar conexões e evitar abrir uma nova a cada requisição.
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    // Em produção é recomendado usar `verify-full` ou `uselibpqcompat=true&sslmode=require`.
    rejectUnauthorized: false,
  },
});

module.exports = {
  // Exporta uma função genérica para executar queries com parâmetros.
  query: (text, params) => pool.query(text, params),
};
