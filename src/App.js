import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Inputs />
      <Table />
    </MyProvider>
  );
}

export default App;
