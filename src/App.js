import React from 'react';
import './App.css';
import FilterBar from './Components/FilterBar';
import Table from './Components/Table';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <FilterBar />
      <Table />
    </Provider>

  );
}

export default App;
