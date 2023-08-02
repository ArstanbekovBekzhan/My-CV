import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "./assets/styles/index.css"
import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <Router>
    <App />
  </Router>
);

createRoot(root).render(rootElement); 
