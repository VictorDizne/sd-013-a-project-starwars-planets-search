import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '.';
import getPlanetsFetch from '../services/starWarsApi';

const Provider = ({ children }) => {
  const [data, setData] = useState({ data: {}, isLoading: true });
  const [column, setColumn] = useState('population');
  const [comparision, setComparision] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });
  const [filtered, setFiltered] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Funcao para filtrar por nome
  const handleInput = (nome) => {
    setFilters(
      { ...filters,
        filters: {
          filterByName: {
            name: nome,
          },
        },
      },
    );
  };

  const handleOnClick = (funcao) => {
    setFilters({
      ...filters,
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [{ column, comparision, value }],
      },

    });
    funcao();
  };

  // Chama API
  const getPlanets = () => {
    getPlanetsFetch()
      .then((response) => setData({
        ...data,
        data: response,
        isLoading: false,
      }));
  };

  // ComponentDidMount
  useEffect(() => {
    getPlanets();
  });

  const context = {
    ...filters,
    ...data,
    column,
    comparision,
    value,
    filtered,
    loaded,
    handleInput,
    setColumn,
    setComparision,
    setValue,
    setFiltered,
    setLoaded,
    handleOnClick,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
