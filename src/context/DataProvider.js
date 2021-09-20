import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  // Criando os estados do componente Provider
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, SetFilterByName] = useState('');
  const ref = useRef(false);
  const backup = useRef([]);
  // Usando a função da aula 18.3 do Course para requisitar API
  // 'Lint' orientou que fosse declarada a função assíncrona dentro do 'Effect'
  const fetchAPI = async () => {
    const url = 'https://swapi.dev/api/planets/';
    const { results } = await fetch(url).then((response) => response.json());
    setData(results);
    setIsLoading(false);
    backup.current = results;
  };

  const filterName = () => {
    // Atualiza o Data, filtrando o nome dos planetas de acordo com a chave name de cada planeta
    // toLowerCase passa os valores para minúsculo
    setData(
      backup.current.filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.toLowerCase())),
    );
  };

  // DidMount
  useEffect(() => {
    fetchAPI();
  }, []);

  // DidUpdate
  useEffect(() => {
    if (ref.current) {
      filterName();
    } else {
      ref.current = true;
    }
  }, [filterByName]);

  const contextValue = {
    data,
    isLoading,
    SetFilterByName,
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
