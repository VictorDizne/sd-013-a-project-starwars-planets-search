import React from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import PlanetsContextProvider from './context/PlanetsContextProvider';

const App = () => (
  <PlanetsContextProvider>
    <Filter />
    <Table />
  </PlanetsContextProvider>
);

export default App;
