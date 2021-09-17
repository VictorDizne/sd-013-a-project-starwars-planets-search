import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchApi = (async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const results = await fetch(url)
      .then((response) => response.json())
      .then((response) => response.results);
    setData(results);
  });

  useEffect(() => {
    fetchApi();
  }, []);

  const context = { data };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

export { Context, MyProvider as Provider };
