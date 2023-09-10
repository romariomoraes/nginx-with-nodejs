const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.get('/list', (req, res) => {

    const db = mysql.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'root',
        database: 'mydb',
    });

    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Conectado ao banco de dados MySQL');
    });

    const sql = 'SELECT * FROM people';

    db.query(sql, (err, results) => {
        if (err) throw err;
        const names = results.map((row) => row.name);
        res.send(
            `<h1>Full Cycle Rocks!</h1>\n<p>Lista de nomes cadastrada no banco de dados:</p>\n<ul>${names
                .map((name) => `<li>${name}</li>`)
                .join('')}</ul>`
        );
    });
});

app.listen(port, () => {
    console.log(`Servidor Node.js rodando na porta ${port}`);
});
