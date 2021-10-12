import React from 'react';
import './App.css';
// import fetchStarWarsAPI from './services/starWarsAPI';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
