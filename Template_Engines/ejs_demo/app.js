const express = require('express');
const ejs = require('ejs');
const app = express();
const products = require("./data/products.json");

app.set('view engine', 'ejs')

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
})
app.get('/about', (req, res) => {
    res.render('pages/about');
})
app.get('/careers', (req, res) => {
    res.render('pages/careers');
})
app.get('/products', (req, res) => {
    res.render('pages/products',{products});
})
app.get('/users', (req, res) => {
    const users = ['Asutosh', 'Vamsi', 'Pooja', 'Duryodhan'];
    let html = ejs.render('<%= users.join(", "); %>', { users: users });
    res.send(html);
})

app.listen(5000, () => {
    console.log("server runnign in port 5000");
});
