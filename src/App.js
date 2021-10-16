import React from 'react';
import './App.css';
import InputSearch from './components/InputSearch';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Table />
    </Provider>
  );
}

export default App;
