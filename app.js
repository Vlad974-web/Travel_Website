const express = require('express');
const path = require('path');
const app = express();


// Middleware -> BodyParser
app.use(express.json());
app.use(express.urlencoded({extended: false}))


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