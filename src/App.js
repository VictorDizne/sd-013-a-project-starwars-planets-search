import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import PlanetsContextProvider from './contexts/PlanetsContextProvider';

function App() {
  // const { setData, setIsPlanetsFilled, setColumns, setPlanets } = usePlanetsContext();

  // useEffect(() => {
  // fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  // .then((response) => response.json())
  // .then(() => {
  // setData(data);
  // setPlanets(data.results);
  // setIsPlanetsFilled(true);
  // })
  // .catch((err) => console.error(err.message));
  // }, [setColumns, setData, setIsPlanetsFilled, setPlanets]);

  return (
    <PlanetsContextProvider>
      <SearchBar />
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;
