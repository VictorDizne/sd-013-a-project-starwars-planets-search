import React from 'react';
import Filters from '../components/Filters';
import Table from '../components/Table';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Filters />
      <Table />
    </div>
  );
}
