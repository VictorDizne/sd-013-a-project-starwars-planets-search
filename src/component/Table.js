import React, { useContext } from 'react';
import StarsContext from '../context/StarContext';
import Select from './Select';

function Table() {
  const { data, setFilters, filters } = useContext(StarsContext);// no contexto tem o data que são os dados da api, e um filtro global- filters e setFilters que será acessado por outros components

  function handleChange(event) { // funcao colocada no input nome do planeta
    setFilters({ // como quero mudar o estado chamo setFilters, como preciso manter os dados faço o spread, e depois chamo só a chave que vai alterar o valor
      ...filters,
      filterByName: { name: event.target.value },
    });
  }
  // Aqui o Edurado ensinou sobre object literal que é bom de usar no lugar do switch
  const objectLiteral = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => Number(a) === Number(b),
  };

  function searchPlanet() {
    if (data.length) { // se os dados da api chegaram certinho
      const result = data.filter((planet) => {
        const filterByName = planet.name.toLowerCase()
          .includes(filters.filterByName.name.toLowerCase());// filtra o planeta pelo nome que o usuario colocou no input
        const resultNumeric = filters.filterByNumericValues
          .every(({ column, value, comparison }) => { // retorna true ou false, e queremos que retorne true para os planetas.
            const filterNumeric = objectLiteral[comparison](planet[column], value); // no comparsion vai entrar o maior que, menor que e igual,(parametros que entrarao no lugar de a e b-exemplo population retorna 2000, e o usuario coloca um value 2000, se for maior que esse planeta fica falso)
            return filterNumeric;
          });
        return filterByName && resultNumeric; // se passar no filtro numerico e no filtro do nome do planeta
      });
      return result;
    }
  }

  if (data.length === 0) { // estou esperando a resposta da api, se nao tiver nada retorna um loading
    return <p>...loading</p>;
  }

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" id="name" />
      <Select />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {searchPlanet().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// depois que o edu ensinou esse object literals, eu pesquisei sobre ele e vi que é bem interessante:
// esse link me ajudou a entender melhor: https://blog.rocketseat.com.br/substituindo-a-instrucao-switch-por-object-literal/
