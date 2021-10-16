import React from 'react';
import Filtros from './components/filtros';
import Table from './components/tableApi';
import Provider from './context/Context';
import FiltersActiveds from './components/filtersActived';
import CompareColumn from './components/compareColumn';

function App() {
  return (
    <Provider>
      <div>
        <Filtros />
        <CompareColumn />
        <FiltersActiveds />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
