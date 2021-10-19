import React, { useState } from 'react';
import './App.css';
import InputNumber from './components/InputNumber';
import InputSearch from './components/InputSearch';
import SelectColumn from './components/SelectColumn';
import SelectValue from './components/SelectValue';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  const [valueInputNumber, setValueInputNumber] = useState(
    {
      column: '',
      comparison: '',
      value: '',
    },
  );

  function handleChange({ target: { value, name } }) {
    setValueInputNumber({ ...valueInputNumber, [name]: value });
  }

  return (
    <Provider>
      <InputSearch />
      <br />
      <SelectColumn handleChangeProps={ handleChange } />
      <SelectValue handleChangeProps={ handleChange } />
      <InputNumber handleChangeProps={ handleChange } InputNumber={ valueInputNumber } />
      <Table />
    </Provider>
  );
}

export default App;
