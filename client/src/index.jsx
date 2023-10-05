import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Render the React application to the root HTML element in strict mode.
ReactDOM.render(
  // Wrap the App component in React Strict Mode for additional development checks.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Specify the root HTML element where the React application should be rendered.
  document.getElementById('root')
);

