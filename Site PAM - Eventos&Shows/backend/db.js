const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Verifica se estamos em produção (opcional, mas recomendado)
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Se for local, definimos ssl como false. 
  // Se for produção, usamos o objeto com rejectUnauthorized.
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};