import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { authStuff } from './utils/auth.js';
import db from './config/connection.js'
dotenv.config();

import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());    
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3005;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authStuff.authMiddleware,
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build/public')));
  }
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
//     .catch((err) => console.log(err));

    const startApolloServer = async (typeDefs, resolvers) => {
        await server.start();
        server.applyMiddleware({ app });
        
        db.once('open', () => {
          app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
          })
        })
        };
        
      // Call the async function to start the server
        startApolloServer(typeDefs, resolvers);