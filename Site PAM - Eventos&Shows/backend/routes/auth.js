const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const db = require('../db');

const router = express.Router();

// Validação de entrada com Joi para evitar dados inválidos e garantir regras de negócio.
const registerSchema = Joi.object({
  name: Joi.string().min(3).max(80).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10,11}$/).required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().required(),
  cep: Joi.string().pattern(/^[0-9]{8}$/).required(),
  street: Joi.string().min(3).required(),
  neighborhood: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  state: Joi.string().min(2).max(2).required(),
  number: Joi.string().min(1).required(),
  complement: Joi.string().max(100).allow('', null),
});

// Validação de login somente para e-mail e senha.
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Rota de cadastro: valida os dados, cria usuário e endereço.
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
      cep,
      street,
      neighborhood,
      city,
      state,
      number,
      complement,
    } = req.body;

    // Valida todos os campos e retorna erros completos se algo estiver errado.
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ message: 'Dados inválidos', details: error.details });
    }

    // Confirma se as senhas batem antes de inserir no banco.
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'As senhas não coincidem.' });
    }

    // Verifica se o e-mail já está em uso.
    const existingUser = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    // Hash com bcrypt garante que a senha não seja salva em texto simples.
    const passwordHash = await bcrypt.hash(password, 10);

    // Usa transação para garantir consistência entre as tabelas users e addresses.
    await db.query('BEGIN');

    const createUser = await db.query(
      `INSERT INTO users (name, email, phone, password_hash) VALUES ($1, $2, $3, $4) RETURNING id`,
      [name, email, phone, passwordHash]
    );

    const userId = createUser.rows[0].id;

    await db.query(
      `INSERT INTO addresses (user_id, cep, street, neighborhood, city, state, number, complement)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [userId, cep, street, neighborhood, city, state, number, complement || '']
    );

    await db.query('COMMIT');

    // Retorna 201 para indicar que o registro foi criado com sucesso.
    return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
  } catch (err) {
    // Se algo falhar, desfaz a transação para não deixar dados inconsistentes.
    await db.query('ROLLBACK');
    console.error('Erro no registro:', err);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

// Rota de login: autentica o usuário e emite token JWT.
router.post('/login', async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos.' });
    }

    const { email, password } = req.body;

    // Busca as credenciais do usuário no banco.
    const userResult = await db.query('SELECT id, password_hash FROM users WHERE email = $1', [email]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const user = userResult.rows[0];

    // Compara a senha enviada com o hash armazenado.
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    // Gera JWT curto para ser usado pelo frontend nas chamadas autenticadas.
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Por enquanto o backend considera o perfil completo após login.
    return res.json({ token, isProfileComplete: true });
  } catch (err) {
    console.error('Erro no login:', err);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

module.exports = router;
