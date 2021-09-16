import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/Context';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([1]);
  const planets = {
    data,
  };

  useEffect(() => {
    const getData = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((result) => result.json());
      setData(results);
    };
    getData();
  }, []);

  return (
    <MyContext.Provider value={ planets }>
      <Table />
    </MyContext.Provider>
  );
}

export default App;
