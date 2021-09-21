import React from 'react';
import './index.css';
import FilterBar from './Components/FilterBar';
import Table from './Components/Table';
import Provider from './Context/Provider';
import Header from './Components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <FilterBar />
      <Table />
    </Provider>
  );
}

export default App;
