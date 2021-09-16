import React, { useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import usePlanetsContext from './hooks/usePlanetsContext';
import getColumns from './utils/getColumns';

function App() {
  const { setData, setIsPlanetsFilled, setColumns, setPlanets } = usePlanetsContext();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setColumns(getColumns(data.results));
        setPlanets(data.results);
        setIsPlanetsFilled(true);
      })
      .catch((err) => err.message);
  }, [setIsPlanetsFilled, setData, setColumns, setPlanets]);

  return (
    <>
      <SearchBar />
      <Table />
    </>
  );
}

export default App;
