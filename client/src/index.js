import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import client from './graphql/apolloClient.js';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/authContext';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    // <AuthProvider>
        <ApolloProvider client={client}>
          
                <React.StrictMode>
                    <App />
                </React.StrictMode>
        
        </ApolloProvider>
    // </AuthProvider>
);