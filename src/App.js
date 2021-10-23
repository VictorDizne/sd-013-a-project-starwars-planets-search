import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <Filter />
      <NumericFilter />
      <Order />
      <Table />
    </Provider>
  );
}

export default App;
