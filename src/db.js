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
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'poetry'
  }),
  ujjweb: createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'ujjweb'
  }),
  science: createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'science'
  })
};

module.exports = databases;