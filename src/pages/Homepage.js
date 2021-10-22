import React, { useContext } from 'react';
import MyContext from '../context/Context';
import Table from '../components/Table';

export default function Homepage() {
  const { data } = useContext(MyContext);

  if (data) {
    return (
      <main>
        <Table />
      </main>
    );
  }
}
