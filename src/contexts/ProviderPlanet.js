// Req 1 - Criando provider do projeto com requisição.
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextPlanet from './ContextPlanet';
import fetchApiData from '../services/FetchApi';

export default function ProviderContext({ children }) {
  const [data, setData] = useState([]);
  const [inputFilterValue, setInputFilterValue] = useState(''); // 2° Req
  const handleChange = ({ target: { value } }) => {
    setInputFilterValue(value);
  };// 2° Req
  // A estrutura utilizada no hook useEffect será: useEffect(() => {}, []).
  // Essa estrutura possui o comportamento similar ao 'componentDidMount'.
  useEffect(() => {
    async function getPlanetsApi() {
      const responseApi = await fetchApiData();
      setData(responseApi);
    } getPlanetsApi();
  }, []);

  function numericFilter(input, firstFilter, secondFilter) {
    const resultFilter = data.filter((planet) => {
      if (secondFilter === 'maior que') {
        return Number(planet[firstFilter]) > Number(input);
      }
      if (secondFilter === 'menor que') {
        return Number(planet[firstFilter]) < Number(input);
      }
      if (secondFilter === 'igual a') {
        return Number(planet[firstFilter]) === Number(input);
      }
      return false;
    });
    setData(resultFilter);
  }

  const contextData = {
    data,
    handleChange,
    inputFilterValue,
    numericFilter,
  };

  return (
    <ContextPlanet.Provider value={ contextData }>
      { children }
    </ContextPlanet.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
