import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './componentes/Table';
import MyContext from './componentes/MyContext';

function App() {
  const [planets, setPlanets] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);
  return (
    <MyContext.Provider value={ planets }>
      <div>
        <Table />
      </div>
    </MyContext.Provider>
  );
}

export default App;
