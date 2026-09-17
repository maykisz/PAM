require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');
const registerGetRoutes = require('./crud/get');
const registerPostRoutes = require('./crud/post');
const registerPutRoutes = require('./crud/put');
const registerDeleteRoutes = require('./crud/delete');
const registerAiRoutes = require('./crud/ai');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha sao obrigatorios' });
    }

    db.query(
        'SELECT idLogin, email FROM tbLogin WHERE email = ? AND senha = ?',
        [email.trim().toLowerCase(), senha],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao validar login' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'Email ou senha invalidos' });
            }

            res.json(results[0]);
        }
    );
});

registerGetRoutes(app);
registerPostRoutes(app);
registerPutRoutes(app);
registerDeleteRoutes(app);
registerAiRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
