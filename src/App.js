import React from 'react';
// import Filters from './componentes/Filters';
import Provider from './context/Provider';
import Table from './table/Table';

function App() {
  return (
    <Provider>
      {/* <Filters /> */}
      <Table />
    </Provider>
  );
}

export default App;
