import React from 'react';

import Header from '../components/Header';
import CurrentFilters from '../components/CurrentFilters';
import Table from '../components/Table';

const Home = () => (
  <div>
    <Header />
    <CurrentFilters />
    <Table />
  </div>
);

export default Home;
