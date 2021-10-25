import React from 'react';
import './App.css';
import Table from './Components/Table';
import Input from './Components/Input';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
