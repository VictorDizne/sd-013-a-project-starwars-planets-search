import React, { useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import usePlanetsContext from './hooks/usePlanetsContext';
import getColumns from './utils/getColumns';

function App() {
  const { setData, setIsPlanetsFilled, setColumns } = usePlanetsContext();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setColumns(getColumns(data.results));
        setIsPlanetsFilled(true);
      })
      .catch((err) => err.message);
  }, [setIsPlanetsFilled, setData, setColumns]);

  return (
    <Table />
  );
}

export default App;
