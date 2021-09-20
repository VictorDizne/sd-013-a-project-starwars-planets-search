import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  // Criando os estados do componente Provider
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Usando a função da aula 18.3 do Course para requisitar API
  // 'Lint' orientou que fosse declarada a função assíncrona dentro do 'Effect'
  const fetchAPI = async () => {
    const url = 'https://swapi.dev/api/planets/';
    const { results } = await fetch(url).then((response) => response.json());
    setData(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const contextValue = {
    data,
    isLoading,
  };

  return (
    <div>
      <DataContext.Provider value={ contextValue }>
        { children }
      </DataContext.Provider>
    </div>
  );
}

DataProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default DataProvider;
