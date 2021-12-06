const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());




app.use((req, res) => {
    res.status(404).end();
});

// connect to db

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'ssTbAmory!203CoC?',
        database: 'election'
    },
    console.log('Connected to the election database')
)

db.query(`SELECT * FROM candidates`, (err, rows) =>{
    console.log(rows);
})

app.listen(PORT, () => {
    console.log(`Coming to you live on port ${PORT}!`);
});