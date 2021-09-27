import React from 'react';
import Provider from './Contexto/Provider';
import Table from './components/Table';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Table />
    </Provider>
  );
}

export default App;
