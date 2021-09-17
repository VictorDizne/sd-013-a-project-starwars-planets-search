import React, { useContext } from 'react';
import Table from '../components/Table';
import myContext from '../context';

export default function Home() {
  useContext(myContext);
  return (
    <div>
      <h1>Home</h1>
      <Table />
    </div>
  );
}
