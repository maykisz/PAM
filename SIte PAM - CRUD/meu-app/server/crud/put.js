const db = require('../db');

function registerPutRoutes(app) {
    app.put('/tasks/:id', (req, res) => {
        const { id } = req.params;
        const { titulo, descricao, status, idDesenvolvedor } = req.body;

        if (!titulo || !descricao || !status || !idDesenvolvedor) {
            return res.status(400).json({
                error: 'Titulo, descricao, status e desenvolvedor sao obrigatorios'
            });
        }

        const query = `
            UPDATE tbTarefa
            SET titulo = ?, descricao = ?, status = ?, idDesenvolvedor = ?
            WHERE idTarefa = ?
        `;

        db.query(query, [titulo, descricao, status, idDesenvolvedor, id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: 'Erro ao atualizar tarefa',
                    details: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: 'Tarefa nao encontrada'
                });
            }

            res.json({
                idTarefa: Number(id),
                titulo,
                descricao,
                status,
                idDesenvolvedor
            });
        });
    });
}

module.exports = registerPutRoutes;
