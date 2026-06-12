const db = require('../db');

function registerPostRoutes(app) {
    app.post('/tasks', (req, res) => {
        const { titulo, descricao, idDesenvolvedor } = req.body;

        if (!titulo || !descricao || !idDesenvolvedor) {
            return res.status(400).json({
                error: 'Titulo, descricao e desenvolvedor sao obrigatorios'
            });
        }

        const query = `
            INSERT INTO tbTarefa (titulo, descricao, idDesenvolvedor)
            VALUES (?, ?, ?)
        `;

        db.query(query, [titulo, descricao, idDesenvolvedor], (err, result) => {
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
