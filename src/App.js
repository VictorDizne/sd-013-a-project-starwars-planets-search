import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
