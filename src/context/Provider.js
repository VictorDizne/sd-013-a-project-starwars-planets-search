import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import contextApp from './contextApp';
import searchPlanets from '../services/ApiPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]); // estados criados para salvar retorno API
  const [estadoNumerico, setEstadoNumerico] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  // const [filterUsed, setFilterUsed] = useState([]);
  // const [nameSearch, setNameSearch] = useState('');

  // const [dataError, setDataError] = useState(false);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const setFilterByName = (searchTerm) => {
    setFilters({
      ...filters,
      filterByName: { name: searchTerm },
    });
  };

  // const filterHandle = ({ target: { value } }) => {
  //   setFilters((prevState) => ({
  //     ...prevState,
  //     filterByName: { name: value },
  //   }));
  // };

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    setFilterByName,
    estadoNumerico,
    setEstadoNumerico,
  };

  useEffect(() => {
    const GetPlanets = async () => {
      const result = await searchPlanets();
      setData(result);
      result.map((item) => delete item.residents);
      // console.log(result);
    };
    GetPlanets();
  }, []); // funcao e um array vazio === didMount,renderiza uma vez

  return (
    <contextApp.Provider value={ contextValue }>
      {children}
    </contextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
