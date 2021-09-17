import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const fetchApi = (async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const results = await fetch(url)
      .then((response) => response.json())
      .then((response) => response.results);
    setData(results);
  });

  const handleOnChangeFilter = (param) => {
    setFilters({ filterByName: { name: param } });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const context = {
    data, filters, handleOnChangeFilter, setFilters };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

export { Context, MyProvider as Provider };
