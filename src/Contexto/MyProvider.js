import React, { useEffect, useState } from 'react';
// import { Children } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]); // questao1

  const [filters, setFilters] = useState({ // questão 2
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });
  // o useState seta o estado do componente

  const fetchStar = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((body) => {
        const del = body.results.map(({ residents, ...rest }) => rest);
        setData(del);
      });
  };

  useEffect(fetchStar, []);

  return ( // questao1
    <MyContext.Provider value={ { data, setData, filters, setFilters } }>
      { children }
    </MyContext.Provider>
  );
}
// dentro do value é passado um objeto com os valores do estado.
// o MyContect recebe o children que, que é toda a aplicação.

MyProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default MyProvider;

// Projeito feito com ajuda do colega Adriano Monteiro da turma 13A
