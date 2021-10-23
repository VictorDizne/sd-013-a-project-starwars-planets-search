// Req 1 - Criando provider do projeto com requisição.
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextPlanet from './ContextPlanet';
import fetchApiData from '../services/FetchApi';

export default function ProviderContext({ children }) {
  const [data, setData] = useState([]);
  const [planetKeys, setPlanetKeys] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(data);
  const [inputFilterValue, setInputFilterValue] = useState(''); // 2° Req
  // Estados para o filtro de ordenação do Requisito 6
  const [columnOrder, setColumnOrder] = useState('name');
  const [order, setOrder] = useState('ASC');
  const [ordering, setOrdering] = useState();

  const handleChange = ({ target: { value } }) => {
    setInputFilterValue(value);
  };// 2° Req
  // A estrutura utilizada no hook useEffect será: useEffect(() => {}, []).
  // Essa estrutura possui o comportamento similar ao 'componentDidMount'.
  useEffect(() => {
    async function getPlanetsApi() {
      const responseApi = await fetchApiData();
      setData(responseApi);
      setFilteredPlanets(responseApi);
      const objData = Object.keys(responseApi[0]);
      setPlanetKeys(objData);
    } getPlanetsApi();
  }, []);

  function numericFilter(input, firstFilter, secondFilter) {
    const resultFilter = filteredPlanets.filter((planet) => {
      if (secondFilter === 'maior que') {
        return Number(planet[firstFilter]) > Number(input);
      }
      if (secondFilter === 'menor que') {
        return Number(planet[firstFilter]) < Number(input);
      }
      if (secondFilter === 'igual a') {
        return Number(planet[firstFilter]) === Number(input);
      }
      return setFilteredPlanets(data);
    });
    // setData(resultFilter);
    setFilteredPlanets(resultFilter);
  }

  const filterPlanets = () => {
    setFilteredPlanets(data);
    filterByNumericValues.forEach((filter) => {
      numericFilter(filter.value, filter.column, filter.comparison);
    });
  };

  useEffect(() => {
    filterPlanets();
  }, [filterByNumericValues]);

  const contextData = {
    data,
    handleChange,
    inputFilterValue,
    numericFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    filteredPlanets,
    columnOrder,
    setColumnOrder,
    order,
    setOrder,
    ordering,
    setOrdering,
    planetKeys,
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
