import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  return (
    <Context.Provider value={ planets }>
      <Table />
    </Context.Provider>
  );
}

export default App;
