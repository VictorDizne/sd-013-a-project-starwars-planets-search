import React from 'react';
import Provider from './context/Provider';
import FilterNumber from './componentes/FilterNumber';
import Table from './componentes/Table';
import FilterName from './componentes/filterName';
import ClearFilters from './componentes/Clearfilters';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      {/* <ApplyFilters /> */}
      <ClearFilters />
      <Table />
    </Provider>
  );
}

export default App;
