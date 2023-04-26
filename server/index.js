import { ApolloServer } from 'apollo-server';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';


const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://alexbrenes:Tyra6310@onlydevs.riluyn8.mongodb.net/onlydevsdb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3005;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
    // context: authMiddleware,  ----------------  not ready yet but set for when we incorporate JWT
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((err) => console.log(err));