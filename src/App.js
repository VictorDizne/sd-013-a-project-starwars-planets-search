import React from 'react';
import Provider from './Contexto/Provider';
import Table from './Componentes/Table';
import Input from './Componentes/Input';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
