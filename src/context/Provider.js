import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './tableContext'; // IMPORTANDO O CONTEXT PARA UTILIZAÇÃO

function Provider({ children }) { // PASSANDO O CHILDREN DESESTRUTURADO
  const [data, setData] = useState({ // CRIANDO O ESTADO COM O USESTATE, DENTRO DELE PASSAMOS O ESTADO INICIAL E O SETSTATE.
    count: 0,
    next: '',
    previous: null,
    results: [],
  });

  const [loading, setLoading] = useState(true); // CRIANDO OUTRO ESTADO

  const [filter, setFilter] = useState({ // CRIANDO OUTRO ESTADO
    filters: {
      filterByName: {
        name: '',
        age: 10,
      },
    },
  });

  const handleFilterByName = (newName) => { // CRIANDO A FUNCAO QUE É RESPONSÁVEL POR FAZER O FILTRO POR NOME
    const { filters: { filterByName } } = filter; // DESESTRUTURANDO FILTERBYNAME DE FILTERS DE FILTER
    setFilter({ // SETANDO UM NOVO ESTADO COM O SETFILTER, ATUALIZANDO FILTERS
      ...filter, filters: { filterByName: { ...filterByName, name: newName } } });
  }; // PEGA O ESTADO ANTERIOR DE FILTER COM O SPREAD OPERATOR E DO FILTERBYNAME

  // componentDidMount
  useEffect(() => { // ATUALIZANDO A APLICACAO COM A REQUISICAO DA API
    const fetchPlanets = async () => {
      setLoading(true); // ATUALIZANDO O LOADING
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await (await fetch(url)).json();
      setLoading(false); // ATUALIZANDO LOADING APÓS A API CARREGAR
      setData(results); // ATUALIZANDO O RESULTADO DA API
    };

    fetchPlanets(); // CHAMANDO A FUNCAO
  }, []);

  return ( // RETORNA O CONTEXT.PROVIDER COM O VALUE COM OS VALORES QUE SERÃO USADOS EM OUTRO COMPONENTE
    <tableContext.Provider value={ { data, loading, handleFilterByName, filter } }>
      {children}
    </tableContext.Provider> // TODOS OS FILHOS ENGLOBADOS PELO PROVIDER TERAO ACESSO.
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
