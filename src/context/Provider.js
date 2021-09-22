import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '.';
import getPlanetsFetch from '../services/starWarsApi';

const Provider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
  const [dataArray, setDataArray] = useState([]);

  // Funcao para filtrar por nome
  const handleInput = (nome) => {
    setFilters(
      { ...filters,
        filters: {
          filterByName: {
            name: nome,
          },
          filterByNumericValues: dataArray,
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
  async function getPlanets() {
    await getPlanetsFetch()
      .then((response) => setData(response));
    setIsLoading(false);
  }

  // ComponentDidMount
  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    ...filters,
    data,
    column,
    comparision,
    value,
    filtered,
    loaded,
    dataArray,
    isLoading,
    handleInput,
    setColumn,
    setComparision,
    setValue,
    setFiltered,
    setLoaded,
    setDataArray,
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
