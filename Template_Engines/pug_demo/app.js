const express = require('express');
const app = express();

const users = ['Asutosh', 'Vamsi', 'Pooja', 'Duryodhan'];

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/users', (req, res) => {
    res.render('users', { users })
})

app.listen(5000, () => {
    console.log("server runnign in port 5000");
});
