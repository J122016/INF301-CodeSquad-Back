// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const _ = require('lodash');
//const bodyParser = require('body-parser');
//const { makeExecutableSchema } = require('graphql-tools');

// Import models detallados
const { tiposgql } = require('./archivos_gql/tipos')
const { inputgql } = require('./archivos_gql/input')
const { querygql } = require('./archivos_gql/query')
const { mutationgql } = require('./archivos_gql/mutation')
const { funcionquery } = require('./archivos_gql/funcion_query')
const { funcionmutation } = require('./archivos_gql/funcion_mutation')

// Connect to MongoDB database
const mongo_url = "mongodb+srv://manuelvargas612:gCoYuFWlJPfBzBdM@cluster0.yrxxtim.mongodb.net/";
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: false });

// Define GraphQL schema

const typeDefs = gql`
    ${tiposgql}
    ${inputgql}
    ${querygql}
    ${mutationgql}
`;

// Define resolvers for queries and mutations
const resolvers = {
    Query: {
    },
    Mutation: {
    }
};

Object.assign(resolvers.Query,funcionquery);
Object.assign(resolvers.Mutation,funcionmutation);

//resolvers['Query']['getRoles'] = async function(obj, { id }) {
    //const entity = await RolModel.find();
    //return entity;
//}

let apolloServer = null;

// Set CORS options
const port = 3000;
const corsOptions = {
    origin: 'http://localhost:' + port,
    credentials: false
};

// Define initial server setup
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        cors: corsOptions
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, cors: false });
}

startServer();

// Start the server
const app = express();
app.use(cors());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get("/", (request, response) => {
    response.status(200).send("testing...");
})