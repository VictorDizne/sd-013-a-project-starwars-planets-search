import React from 'react';
import FilterName from './componentes/filterName';
import FilterNumber from './componentes/FilterNumber';
import Provider from './context/Provider';
import Table from './table/Table';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <Table />
    </Provider>
  );
}

export default App;
