const db = require('../db');

function registerGetRoutes(app) {
    app.get('/tasks', (req, res) => {
        const query = `
            SELECT
                t.idTarefa,
                t.titulo,
                t.descricao,
                t.status,
                t.dataCriacao,
                d.idDesenvolvedor,
                d.nomeDesenvolvedor
            FROM tbTarefa t
            LEFT JOIN tbDesenvolvedor d
                ON d.idDesenvolvedor = t.idDesenvolvedor
            ORDER BY t.idTarefa DESC
        `;

        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: 'Erro ao listar tarefas',
                    details: err.message
                });
            }

            res.json(results);
        });
    });

    app.get('/developers', (req, res) => {
        const query = `
            SELECT
                idDesenvolvedor,
                nomeDesenvolvedor,
                emailDesenvolvedor,
                cargo,
                githubUrl,
                instagramUrl
            FROM tbDesenvolvedor
            ORDER BY nomeDesenvolvedor
        `;

        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: 'Erro ao listar desenvolvedores',
                    details: err.message
                });
            }

            res.json(results);
        });
    });
}

module.exports = registerGetRoutes;
