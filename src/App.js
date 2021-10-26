import React from 'react';
import Provider from './context/Provider';
import FilterNumber from './componentes/FilterNumber';
import Table2 from './componentes/Table2';
import FilterName from './componentes/filterName';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      {/* <ApplyFilters /> */}
      <Table2 />
    </Provider>
  );
}

export default App;
