import React from 'react';
import './App.css';
import Filters from './Components/FIlters';
import SearchBar from './Components/SearchBar';
import Table from './Components/table';
import Provider from './Context/Provider';

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
