import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './Components/Table';
import Input from './Components/Input';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
