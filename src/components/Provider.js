import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getStarWarsPlanets from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [key, setKey] = useState([]);
  const [filters, setFilters] = useState({
    filters: { filterByName: { name: '' },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
    },
  });

  const { filters: { filterByNumericValues } } = filters;

  const fetchPlanets = async () => {
    const { results } = await getStarWarsPlanets();
    results.forEach((el) => delete el.residents);
    setData(results);
    setKey(Object.keys(results[0]));
    setIsFetching(false);
  };

  const handleInputFilter = () => {
    const { filters: { filterByName: { name } } } = filters;

    if (!name) return data;
    return data
      .filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()));
  };

  const inputfilter = handleInputFilter();

  const handleInputFilterChange = ({ target }) => {
    const { value } = target;
    setFilters({
      filters: {
        filterByNumericValues,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const handleFiltersChange = ({ target }) => {
    const { name, value } = target;
    setFilters({
      filters:
        {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            { ...filterByNumericValues[0],
              [name]: value,
            },
          ],
        },
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    inputfilter,
    setData,
    isFetching,
    key,
    filters,
    handleInputFilterChange,
    handleFiltersChange,
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
