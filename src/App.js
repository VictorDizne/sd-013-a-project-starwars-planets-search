import React from 'react';
import './App.css';
// import Table from './Components/Table';
import MyProvider from './Contexto/MyProvider';
import Table from './Components/Table';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
