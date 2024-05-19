// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const _ = require('lodash');
//const bodyParser = require('body-parser');
//const { makeExecutableSchema } = require('graphql-tools');

// Import models detallados
const ExampleModel = require('./models/exampleModel');

// Connect to MongoDB database
const mongo_url = "mongodb+srv://CodeSquadDevAdmin:1nnaXdLZVUeNRTG2@cluster0free.losq0cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Free";
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: false });

// Define GraphQL schema
const typeDefs = gql`
    type ModelOne {
        id: ID!
        nombre: String!
    }

    type Mensaje {
        id: ID!
        mensaje: String!
    }

    input ModelOneInput{
        nombre: String!
    }

    type Query {
        getEntities: [ModelOne]
        getEntity(id: String!): ModelOne
    }

    type Mutation {
        addEntity(input: ModelOneInput): ModelOne
        updateEntity(id: String!, input: ModelOneInput): ModelOne
        deleteEntity(id: String!): Mensaje
    }
`;

// Define resolvers for queries and mutations
const resolvers = {
    Query: {
        async getEntity(obj, { id }) {
            const entity = await ExampleModel.findById(id);
            return entity;
        },
        async getEntities(obj, { id }) {
            const entity = await ExampleModel.find();
            return entity;
        }
        // Add queries as needed
    },
    Mutation: {
        async addEntity(obj, { input }) {
            const entity = new ExampleModel(input); // Create new entity
            await entity.save(); // Save the new entity
            return entity;
        }
        // Add update and delete resolvers as needed
    }
};

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