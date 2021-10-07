import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

/**
 * Consultei o repositório do Gustavo Caruso para ter uma ideia de como fazer a divisão por pastas.
 * https://github.com/tryber/sd-013-a-project-starwars-planets-search/tree/gusttavocaruso-starwars
 */

/**
 * Tive que reassistir a aula React Hooks - useContext para fazer este arquivo.
 * https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/9b6be40f-241a-4d7b-9edf-b145d87bcadb/conteudos/003b2bbc-5085-49ca-bbac-760b669158b9/usecontext/5ba9f6c7-5da2-4605-8683-d1148f382908?use_case=side_bar
*/

const PlanetsProvider = ({ children }) => {
  /* =============== Definindo o estado 'data' dentro do contexto ================ */
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: '', filterByNumericValues: [] });
  const [changes, setChanges] = useState('');

  /* =============== Buscando os dados dos planetas através ================ */
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const requestPlanets = async () => {
      const { results } = await fetch(url).then((response) => response.json());
      await setData(results); // Setando o valor 'data' com a pesposta do fetch
    };
    requestPlanets();
  }, []);

  /* =============== Retornando o provider ================
    A variavel children é necessária para q qualquer componente filho de Planets Provider seja renderizado;
  */

  const contextValue = {
    data,
    filter,
    changes,
    setFilter,
    setChanges,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
