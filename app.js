require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cristhian Urrea',
        titulo: 'Home'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cristhian Urrea',
        titulo: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cristhian Urrea',
        titulo: 'Elements'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        nombre: 'Cristhian Urrea',
        titulo: 'Page Not Found'
    });
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})