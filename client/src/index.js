import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

serviceWorker.register();