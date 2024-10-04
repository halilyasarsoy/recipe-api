const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const pool = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
  } else {
    console.log('Veritabanına başarıyla bağlanıldı.');
    connection.release();  // Bağlantıyı serbest bırak
  }
});


app.use('/api', recipeRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});

app.get('/', (req, res) => {
  res.send('Uygulama Başarıyla Çalışıyor!');
});

