import React from 'react';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Sort from '../components/Sort';

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

// Sources:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/139/
// Repositório da Elaine 13A
// Auxílio do Lima Lima
