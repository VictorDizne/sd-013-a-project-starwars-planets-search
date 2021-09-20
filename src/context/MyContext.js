import React, { createContext, useState } from 'react';

const Context = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetchIsPossible, setFetch] = useState(true);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [{ column: '', comparison: '', value: '' }] },
  );

  const handleOnClickState = (column, comparison, value) => {
    setFilters({ ...filters,
      filterByNumericValues: [{ column, comparison, value }] });
  };

  const handleOnChangeFilterInput = (param) => {
    setFilters({ ...filters, filterByName: { name: param } });
  };

  const { column, comparison, value } = filters.filterByNumericValues[0];
  const fazOSwitch = () => {
    switch (comparison) {
    case 'maior que':
    { const result = data.filter((item) => Number(item[column]) > Number(value));
      setData(result);
      break; }
    case 'menor que':
    { const result = data.filter((item) => Number(item[column]) < Number(value));
      setData(result);
      break; }
    case 'igual a':
    { const result = data.filter((item) => Number(item[column]) === Number(value));
      setData(result);
      console.log(result);
      break; }
    default:
    { const result = data;
      setData(result); }
    }
  };

  const fetchApi = (async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const payload = await fetch(url)
      .then((response) => response.json())
      .then((response) => response.results);
    setData(payload);
    setFetch(false);
  });

  const context = {
    data,
    fetchIsPossible,
    filters,
    setFilters,
    handleOnClickState,
    handleOnChangeFilterInput,
    fetchApi,
    fazOSwitch,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

export { Context, MyProvider as Provider };
