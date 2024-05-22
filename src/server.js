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
const UsuarioModel = require('./models/usuarioModel');
const RolModel = require('./models/rolModel');
const { tiposgql } = require('./archivos_gql/tipos')
const { inputgql } = require('./archivos_gql/input')
const { querygql } = require('./archivos_gql/query')
const { mutationgql } = require('./archivos_gql/mutation')

// Connect to MongoDB database
const mongo_url = "mongodb+srv://CodeSquadDevAdmin:vQpkNv91hajyyVSd@cluster0free.losq0cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Free";
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
        async getEntity(obj, { id }) {
            const entity = await ExampleModel.findById(id);
            return entity;
        },
        async getEntities(obj, { id }) {
            const entity = await ExampleModel.find();
            return entity;
        },
        async getUsuarios(obj, { id }) {
            const entity = await UsuarioModel.find();
            return entity;
        },
        async getUsuarioRol(obj, { input }) {
            const { nrol } = input;
            const entitys = await UsuarioModel.find();
            const entity = entitys.filter((a) => a.nrol == nrol);
            return entity;
        },
        async getUsuarioRut(obj, { input }) {
            const { rut } = input;
            const entitys = await UsuarioModel.find();
            const entity = entitys.find((a) => a.rut == rut);
            return entity;
        },
        async getRol(obj, { input }) {
            const { nrol } = input;
            const entitys = await RolModel.find();
            const entity = entitys.find((a) => a.nrol == nrol);
            return entity;
        },
        async getRoles(obj, { id }) {
            const entity = await RolModel.find();
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