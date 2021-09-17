import { useContext } from 'react';
import StarWarsContext from '../context';

const useDataPlanets = async () => {
  const { state, setState } = useContext(StarWarsContext);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // const fetchData = async () => {
  // Considerando que o Json que retorna possui uma chave "results"
  // foi possível realizar o destructuring da chave aproveitando a variável para o setState da StarWarsContext;
  const response = await fetch(url);
  const { results } = await response.json();
  setState({
    ...state,
    data: results });
  // };
};

export default useDataPlanets;
