const sql = require('mssql');

const config = {
    user: 'sa',
    password: '87051175Ma@',
    server: 'localhost', // ou '127.0.0.1' ou o IP do servidor SQL
    database: 'todolist',
    options: {
        encrypt: false, // Defina como true se estiver usando Azure
        enableArithAbort: true
    }
};

sql.connect(config)
    .then(() => console.log('Conectado ao SQL Server'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));
