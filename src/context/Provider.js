import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from '.';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState([]);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const getApi = await fetch(endpoint);
      const { results } = await getApi.json();
      results.map((item) => delete item.residents);
      const filteredKey = Object.keys(results[0]);
      setData(results);
      setDataKey(filteredKey);
    };

    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApiValues = () => {
      const values = data.map((result) => Object.values(result));
      setDataValues(values);
    };
    fetchApiValues();
  }, [data]);

  const contextValues = {
    data,
    dataKey,
    dataValues,
  };

  return (
    <tableContext.Provider value={ contextValues }>
      {children}
    </tableContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
