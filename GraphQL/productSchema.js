const graphql = require('graphql');
const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const productType = new GraphQLObjectType({
    name: "Products",
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        price: { type: graphql.GraphQLFloat },
        description: { type: GraphQLString },
        category: { type: GraphQLString },
        image: { type: GraphQLString }
    }
});

const rootQuery = new GraphQLObjectType({
    name: 'rootqueryType',
    fields: {
        Products: {
            type: productType,
            args: { id: { type: GraphQLInt } },
            resolve(a,args) {
                return axios.get(`https://fakestoreapi.com/products/${args.id}`).then(res => res.data)
            }
        }
    }
});
let productSchema = new graphql.GraphQLSchema({
    query: rootQuery
})

module.exports = productSchema;
