import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './Components/Table';
import Form from './Components/Form';
import RemoveList from './Components/RemoveList';
import Sort from './Components/Sort';

function App() {
  return (
    <Provider>
      <Form />
      <Sort />
      <RemoveList />
      <Table />
    </Provider>
  );
}

export default App;
