const db = require('../db');

function registerDeleteRoutes(app) {
    app.delete('/tasks/:id', (req, res) => {
        const { id } = req.params;

        db.query('DELETE FROM tbTarefa WHERE idTarefa = ?', [id], (err, result) => {
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
