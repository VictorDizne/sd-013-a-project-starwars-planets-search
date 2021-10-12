import React, { useContext } from 'react';
import API from '../services/API';
import myContext from '../context/Context';

const Table = () => {
  const { data } = useContext(myContext);
  API();
  console.log(data);
  return (
    <p>
      Parágrafo
    </p>
  );
};

export default Table;
