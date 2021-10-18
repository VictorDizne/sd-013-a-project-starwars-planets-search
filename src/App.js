import React from 'react';
import './App.css';
import InputNumber from './components/InputNumber';
import InputSearch from './components/InputSearch';
import SelectColumn from './components/SelectColumn';
import SelectValue from './components/SelectValue';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputSearch />
      <br />
      <SelectColumn />
      <SelectValue />
      <InputNumber />
      <Table />
    </Provider>
  );
}

export default App;
