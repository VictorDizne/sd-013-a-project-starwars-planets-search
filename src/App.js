import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Table from './Components/table';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
