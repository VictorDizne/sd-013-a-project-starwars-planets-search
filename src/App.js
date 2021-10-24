import React from 'react';
import './App.css';

import Table from './components/Table';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <ApiContextProvider>
      <Table />
    </ApiContextProvider>
  );
}

export default App;
