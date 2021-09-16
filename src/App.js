import React from 'react';
import './App.css';
import Provider from './context/provider';
import Table from './component/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
