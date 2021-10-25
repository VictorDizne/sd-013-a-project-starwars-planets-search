import React from 'react';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

function Home() {
  return (
    <main className="app-container">
      <SearchBar />
      <Filters />
      <Table />
    </main>
  );
}

export default Home;
