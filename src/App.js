import React from 'react';
import Provider from './Contexto/Provider';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
