const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.MYSQLHOST ?? process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.MYSQLPORT ?? process.env.DB_PORT ?? 3306),
    user: process.env.MYSQLUSER ?? process.env.DB_USER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? process.env.DB_PASSWORD ?? '1234',
    database: process.env.MYSQLDATABASE ?? process.env.DB_NAME ?? 'bdTeste'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err.message);
        return;
    }

    console.log('Conectado ao MySQL!');
});

module.exports = db;
