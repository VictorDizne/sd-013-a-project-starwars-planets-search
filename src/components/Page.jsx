import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';
import Filters from './Filters';
import Table from './Table';

function Page() {
  const { data } = useContext(StarWarsContext);
  if (!data) { return (<p>Loading...</p>); }
  return (
    <main>
      <Filters />
      <Table />
    </main>
  );
}

export default Page;
