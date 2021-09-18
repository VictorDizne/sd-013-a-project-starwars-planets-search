import React from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Table from './components/Table';
import SearchForm from './components/SearchForm';
import Filters from './components/Filters';

const App = () => (
  <ContextProvider>
    <SearchForm />
    <Filters />
    <Table />
  </ContextProvider>
);

export default App;
