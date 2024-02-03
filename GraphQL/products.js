const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { graphqlHTTP } = require('express-graphql');
const productSchema = require('./productSchema');


let graphQLInstance = graphqlHTTP({
    schema: productSchema,
    graphiql: true
})

app.use('/products', graphQLInstance);

app.listen(5000, () => { console.log('server running') })