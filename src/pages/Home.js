import React from 'react';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <main className="app-container">
      <SearchBar />
      <Table />
    </main>
  );
}

export default Home;
