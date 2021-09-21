import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './Components/Table';
import Form from './Components/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
