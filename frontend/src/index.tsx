import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Type assertion for TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);