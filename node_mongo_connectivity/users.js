const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://0.0.0.0:27017';
// const client = new MongoClient(url);
const dbName = 'dec2023';
const collName = 'users';
let connection;

async function connectToDB() {
    connection = await MongoClient.connect(url);
    console.log('Connected successfully to MongoDB');
}

app.get('/', (req, res) => {
    res.send('<h1>Server Running....</h1>')
})
app.get('/users', async (req, res) => {
    const users = await connection.db(dbName).collection(collName).find({}).toArray();
    res.json(users)
})
app.get('/users/:id', async (req, res) => {
    userId = +req.params.id;
    const user = await connection.db(dbName).collection(collName).findOne({ id: userId });
    res.json(user)
})

app.listen(5000, () => {
    connectToDB()
    console.log('Server Runniing on port 5000');
})