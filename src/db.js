// src/db.js
const mysql = require('mysql2');

const createPool = (config) => {
  return mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }).promise();
};

// Adatbázis konfigurációk
const databases = {
  poetry: createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'poetry'
  }),
  ujjweb: createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ujjweb'
  }),
  science: createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'science'
  })
};

module.exports = databases;