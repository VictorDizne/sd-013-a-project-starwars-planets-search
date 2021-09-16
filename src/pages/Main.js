import React from 'react';
import Table from '../components/Table';
import FiltersInputs from '../components/FiltersInputs';
import Filters from '../components/Filters';

export default function Main() {
  return (
    <div className="main-container">
      <FiltersInputs />
      <Filters />
      <Table />
    </div>
  );
}
