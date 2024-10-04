const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectTimeout: 20000,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
