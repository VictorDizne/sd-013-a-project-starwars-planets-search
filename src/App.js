import React from 'react';
import Provider from './Contexto/Provider';
import Table from './Componentes/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
