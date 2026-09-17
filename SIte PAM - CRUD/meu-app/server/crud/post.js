const db = require('../db');

function registerPostRoutes(app) {
    app.post('/tasks', (req, res) => {
        const { titulo, descricao, idDesenvolvedor } = req.body;
        const userId = Number(req.headers['x-user-id']);

        if (!userId) {
            return res.status(401).json({ error: 'Usuario nao autenticado' });
        }

        if (!titulo || !descricao || !idDesenvolvedor) {
            return res.status(400).json({
                error: 'Titulo, descricao e desenvolvedor sao obrigatorios'
            });
        }

        const query = `
            INSERT INTO tbTarefa (titulo, descricao, idDesenvolvedor, idLogin)
            VALUES (?, ?, ?, ?)
        `;

        db.query(query, [titulo, descricao, idDesenvolvedor, userId], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: 'Erro ao criar tarefa',
                    details: err.message
                });
            }

            res.status(201).json({
                idTarefa: result.insertId,
                titulo,
                descricao,
                idDesenvolvedor,
                status: 'pendente'
            });
        });
    });
}

module.exports = registerPostRoutes;
