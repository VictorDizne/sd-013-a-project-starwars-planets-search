import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './Context/Provider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
