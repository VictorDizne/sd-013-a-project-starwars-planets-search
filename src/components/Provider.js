import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getStarWarsPlanets from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [key, setKey] = useState([]);
  const [search, setSearch] = useState(false);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
    },
  });

  const { filters: { filterByNumericValues, filterByName } } = filters;

  const fetchPlanets = async () => {
    const { results } = await getStarWarsPlanets();
    results.forEach((el) => delete el.residents);
    setData(results);
    setKey(Object.keys(results[0]));
    setIsFetching(false);
  };

  const handleSearch = () => {
    const { name } = filterByName;
    const { column, value = 0, comparison } = filterByNumericValues[0];
    if (search && comparison === 'maior que') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] > Number(value));
    }
    if (search && comparison === 'menor que') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] < Number(value));
    }
    if (search && comparison === 'igual a') {
      return data
        .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        .filter((e) => e[column] === value);
    }
    return data
      .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()));
  };

  const filteredData = handleSearch();

  const handleClick = () => {
    setSearch(true);
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
        filterByNumericValues: [{
          ...filterByNumericValues[0],
          [name]: value,
        }],
      },
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    filteredData,
    isFetching,
    key,
    filters,
    handleChange,
    handleClick,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
