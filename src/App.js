import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsContext from './contexts/StarWarsContext';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const returnFetch = await request.json();
      setData(returnFetch.results);
    };
    fetchAPI();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      <Table />
    </StarWarsContext.Provider>
  );
}
