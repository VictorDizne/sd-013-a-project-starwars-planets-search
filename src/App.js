import React from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Table from './components/Table';
import SearchForm from './components/SearchForm';

const App = () => (
  <ContextProvider>
    <SearchForm />
    <Table />
  </ContextProvider>
);

export default App;
