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
    filterByNumericValues: [{ column: '', comparison: '', value: '' }], // questão3
  });
  // o useState seta o estado do componente

  const fetchStar = () => { // questão1
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((body) => {
        const del = body.results.map(({ residents, ...rest }) => rest);
        setData(del);
      });
  };
  // Aqui é feito um fetch para API onde ele trata o resultado com o map, que volta um novo array onde a coluna residentes é excluida.
  // o resultado obtido é guardado dentro do setData, pois o requisito pede que seja guardado dentro de um campo chamado data.

  useEffect(fetchStar, []); // questão1
  // o UseEffect executa o tetch uma unica vez comm o comportamento de um componentDidMount

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
