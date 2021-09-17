import React from 'react';
import Loading from './components/Filter';
import Table from './components/Table';
import PlanetsContextProvider from './context/PlanetsContextProvider';

const App = () => (
  <PlanetsContextProvider>
    <Loading />
    <Table />
  </PlanetsContextProvider>
);

export default App;
