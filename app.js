const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();


// Middleware -> BodyParser
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// DotENV
require('dotenv').config();

// MYSQL -> Connecter à la BDD
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})
connection.connect(
  (err) => {
    if (err) {
      throw err
    }
    console.log('Connecté au serveur MySQL');
  }
)

// EJS
app.set('view engine', 'ejs');

// Dossier STATIC (PUBLIC)
app.use(express.static(path.join(__dirname, 'public')));


/*========================= Routes =========================*/
const index = require('./routes/indexRoute');


/*========================= Controller =========================*/
app.use('/', index);


// Sur quel port functionnera application
const port = 1996
app.listen(port, () => {
    console.log(`ecoute Vlad, le port 1996, lancè à : ${new Date().toLocaleString()}, bon courage pour les codes!`);
});