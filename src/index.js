import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlanetProvider from './context/PlanetProvider';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <PlanetProvider>
    <App />
  </PlanetProvider>,
  document.getElementById('root'),
);
