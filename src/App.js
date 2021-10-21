import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
