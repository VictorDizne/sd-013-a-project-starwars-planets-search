import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './contextAPI/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;
