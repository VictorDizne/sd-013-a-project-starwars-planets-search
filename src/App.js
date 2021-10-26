import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import FilteredElements from './components/FilteredElements';
import './App.css';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div>
      <MyProvider>
        <SearchBar />
        <FilteredElements />
        <Table />
      </MyProvider>
    </div>
  );
}

export default App;
