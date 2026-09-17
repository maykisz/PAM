const db = require('../db');

function registerDeleteRoutes(app) {
    app.delete('/tasks/:id', (req, res) => {
        const { id } = req.params;
        const userId = Number(req.headers['x-user-id']);

        if (!userId) {
            return res.status(401).json({ error: 'Usuario nao autenticado' });
        }

        db.query('DELETE FROM tbTarefa WHERE idTarefa = ? AND idLogin = ?', [id, userId], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: 'Erro ao apagar tarefa',
                    details: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: 'Tarefa nao encontrada'
                });
            }

            res.status(204).send();
        });
    });
}

module.exports = registerDeleteRoutes;
