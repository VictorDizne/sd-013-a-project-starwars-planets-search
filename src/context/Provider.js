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
  const [dataArray, setDataArray] = useState([]);
  const [arrayOptions, setArrayOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

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

  // Chama API

  // ComponentDidMount
  useEffect(() => {
    async function getPlanets() {
      const response = await getPlanetsFetch();
      setData(response);
      setFiltered(response);
      setIsLoading(false);
    }
    getPlanets();
  }, []);

  const context = {
    ...filters,
    data,
    column,
    comparision,
    value,
    filtered,
    dataArray,
    isLoading,
    arrayOptions,
    handleInput,
    setColumn,
    setComparision,
    setValue,
    setFiltered,
    setDataArray,
    setArrayOptions,
    setFilters,
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
