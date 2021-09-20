import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import PlanetContext from './context/PlanetContext';
import Table from './components/Table';

function App() {
  const [loading, setLoading] = useState(true);
  const { planets } = useContext(PlanetContext);

  useEffect(() => {
    if (planets.length) setLoading(false);
  }, [planets]);
  // componentDidMount
  // useEffect(async () => {
  //   const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  //   const planets = await results.json();
  //   console.log(planets);
  // }, []);
  return (
    (loading ? <span>Loading ...</span>
      : (
        <>
          <span>Hello, App!</span>
          <Table />
        </>
      ))
  );
}

export default App;
