import React from 'react';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import Table from '../components/Table';

function Home() {
  return (
    <main className="app-container">
      <SearchBar />
      <Sort />
      <Filters />
      <Table />
    </main>
  );
}

export default Home;
