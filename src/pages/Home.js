import React, { useContext } from 'react';
import { Table } from '../components';
import FiltersBar from '../components/FiltersBar';
import Context from '../context/Context';

function Home() {
  const { data } = useContext(Context);

  if (data) {
    return (
      <main>
        <FiltersBar />
        <Table />
      </main>
    );
  }
}

export default Home;
