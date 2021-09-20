import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './Context/Provider';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
