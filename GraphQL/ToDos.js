var express = require("express")
var app = express()

var cors = require('cors');
app.use(cors())

var { graphqlHTTP } = require("express-graphql");
let todoSchema = require('./ToDoSchema')


let graphQLInstance = graphqlHTTP({
    schema: todoSchema,
    graphiql: true,
})
app.use('/todos',graphQLInstance);

app.listen(5000);



