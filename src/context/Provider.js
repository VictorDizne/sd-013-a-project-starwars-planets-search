import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [title, setTitle] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    async function fetchData() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchApi = await fetch(URL);
      const { results } = await fetchApi.json();
      results.map((item) => delete item.residents);
      setData(results);
      setOriginalList(results);
      setTitle(Object.keys(results[0]));
    }
    fetchData();
  }, []);

  function handleChange({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
  }

  function nameFilter() {
    const filteredName = originalList
      .filter((item) => item.name.includes(filters.filterByName.name));
    setData(filteredName);
  }

  useEffect(nameFilter, [filters.filterByName.name]);

  const contextStar = {
    data,
    title,
    filters,
    handleChange,
    setData,
    setFilters,
    originalList,
  };

  return (
    <starWarsContext.Provider value={ contextStar }>
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}.isRequired;

export default Provider;
