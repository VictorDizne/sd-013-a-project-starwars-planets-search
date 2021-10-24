import React from 'react';
import ClearFilters from './componentes/ClearFilters';
import FilterName from './componentes/filterName';
import FilterNumber from './componentes/FilterNumber';
// import RemoveFilter from './componentes/RemoveFilter';
// import ResetFilters from './componentes/ResetFilters';
import Provider from './context/Provider';
import Table from './table/Table';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <ClearFilters />
      {/* <ResetFilters /> */}
      {/* <RemoveFilter /> */}
      <Table />
    </Provider>
  );
}

export default App;
