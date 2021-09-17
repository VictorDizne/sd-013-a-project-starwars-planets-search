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

// a cada alteração na chave name do filterByName do contexto;
// executar uma função que retorna o data filtrado pelo nome
// vou precisar do dataset a cada onChange (useContext)
// aplico o filtro sobre o dataset utilizando o filtro que vem do contexto

// se o target.value.name

// A medida que o context muda eu tenho uma variável que irei utilizar para filtar dados;

// const filterByName = () => {
//   // const { state, setState } = context(StarWarsContext);
//   const [dataFilterByName, setDataFilterByName] = useState([]);
//   const { filters: { filterByName: { name } } } = state;
//   const { data } = state;
//   useEffect(() => {
//     const filteredData = data.filter((planet) => {
//       planet.name.includes(name);
//     });
//     setState({
//       ...state,
//       data: filteredData,
//     });
//   }, [data, name, setState, state]);
// };
