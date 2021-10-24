import React from 'react';
import './App.css';

import FilterByName from './components/FilterByName';
import ShowFilters from './components/ShowFilters';
import Table from './components/Table';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <ApiContextProvider>
      <FilterByName />
      <ShowFilters />
      <Table />
    </ApiContextProvider>
  );
}
export default App;
