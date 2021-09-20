import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getStarWarsPlanets from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [tableHeader, setTableHeader] = useState([]);
  const [search, setSearch] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [searchHistory, setSearchHistory] = useState([]);
  const [dropdowns, setDropdowns] = useState({
    optionA: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    optionB: [
      'maior que',
      'menor que',
      'igual a',
    ],
  });
  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: {
        column: '',
        comparison: '',
        value: '',
      },
    },
  });

  const { filters: { filterByNumericValues, filterByName } } = filters;

  const fetchPlanets = async () => {
    const { results } = await getStarWarsPlanets();
    results.forEach((el) => delete el.residents);
    setData(results);
    setTableHeader(Object.keys(results[0]));
    setIsFetching(false);
  };

  const handleSearch = () => {
    const { name } = filterByName;
    const { column, comparison, value } = search;

    if (comparison === 'maior que') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] > Number(value));
    }
    if (comparison === 'menor que') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] < Number(value));
    }
    if (comparison === 'igual a') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] === value);
    }
    return data
      .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()));
  };

  const handleOptions = () => {
    const { column, comparison } = filterByNumericValues;
    const { optionA, optionB } = dropdowns;

    setDropdowns({
      optionA: optionA
        .filter((option) => option !== column),
      optionB: optionB
        .filter((option) => option !== comparison),
    });
  };

  const handleClick = () => {
    const { column, value, comparison } = filterByNumericValues;
    setSearch({
      column,
      comparison,
      value,
    });

    setSearchHistory([...searchHistory, filterByNumericValues]);

    handleOptions();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'input') {
      return setFilters({
        filters: {
          filterByNumericValues,
          filterByName: { name: value },
        },
      });
    }
    return setFilters({
      filters: {
        filterByName,
        filterByNumericValues: {
          ...filterByNumericValues,
          [name]: value,
        },
      },
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filteredData = handleSearch();

  const context = {
    dropdowns,
    searchHistory,
    filteredData,
    isFetching,
    tableHeader,
    filters,
    handleChange,
    handleClick,
    setSearchHistory,
    setDropdowns,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
