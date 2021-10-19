import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { isLoading,
    filteredPlanets,
    planetsKeys,
    name,
    order,
    colunmOrder,
  } = useContext(PlanetsContext);

  return (
    <div>
      {isLoading && <h2>...Carregando</h2>}
      <table>
        <thead>
          <tr>
            {planetsKeys.map((item, index) => (
              <th key={ index }>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets
            .filter((planet) => (name ? planet.name.includes(name) : true))
            // lógica sort feita com consulta ao código do aluno Fernando
            // link do PR: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/43
            .sort((a, b) => {
              let elemA = a[colunmOrder];
              let elemB = b[colunmOrder];

              if (elemA === 'unknown') elemA = 0;
              if (elemB === 'unknown') elemB = 0;

              if (!Number.isNaN(Number(elemA))) {
                elemA = Number(elemA);
                elemB = Number(elemB);
              }

              if (elemA > elemB) {
                return order === 'ASC' ? 1 : +'-1';
              }
              if (elemA < elemB) {
                return order === 'ASC' ? +'-1' : 1;
              }
              return 0;
            })
            .map((planet) => ( // primeiro map renderiza as linhas da tabela
              <tr key={ planet.name }>
                {planetsKeys.map((key, index) => ( // esse renderiza as células de cada linha usando o array com as keys para acessar cada elemnto
                  // para colocar o data-testid somente quando for um elemento que possui o nome do planeta, foi feito o template literal abaixo
                  <td key={ index } data-testid={ key === 'name' ? 'planet-name' : '' }>
                    {planet[key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
