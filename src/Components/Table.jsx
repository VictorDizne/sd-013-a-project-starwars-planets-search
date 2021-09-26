import React, { useEffect, useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { isLoading, planets, planetsKeys, fetchApi } = useContext(PlanetsContext);

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(planets);
  console.log(planetsKeys);

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
          {planets.map((planet) => (
            <tr key={ planet.name }>
              {planetsKeys.map((key, index) => (
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
