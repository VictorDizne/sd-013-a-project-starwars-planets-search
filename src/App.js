import React from 'react';
import './App.css';
import Header from './components/Header';
import SelectFilterForm from './components/SelectFilterForm';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <SelectFilterForm />
      <Table />
    </Provider>
  );
}

export default App;
