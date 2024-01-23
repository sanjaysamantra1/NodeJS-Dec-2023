const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<h1>Server Running...</h1>')
})
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'bangalore';
    const myUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    const response = await axios.get(myUrl);
    res.render('index', { title: 'Weather App', result: response.data })
    console.dir(response.data )
});

app.listen(5000);

