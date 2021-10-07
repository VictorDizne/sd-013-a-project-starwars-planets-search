import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { isLoading,
    filteredPlanets,
    planetsKeys,
    name,
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
            .map((planet) => ( // primeiro map renderiza as linhas da tabela
              <tr key={ planet.name }>
                {planetsKeys.map((key, index) => ( // esse renderiza as células de cada linha usando o array com as keys para acessar cada elemnto
                  <td key={ index }>
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
