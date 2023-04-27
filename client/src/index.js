import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import client from './graphql/apolloClient.js';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// root.render(
//     <AuthProvider>
//         <ApolloProvider client={client}>
//             <BrowserRouter>
//                 <React.StrictMode>
//                     <App />
//                 </React.StrictMode>
//             </BrowserRouter>
//         </ApolloProvider>
//     </AuthProvider>
// );

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

);