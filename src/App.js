import React from 'react';
import Filtros from './components/filtros';
import Table from './components/tableApi';
import Provider from './context/Context';

function App() {
  return (
    <Provider>
      <div>
        <Filtros />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
