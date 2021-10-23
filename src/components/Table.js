import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function Table() {
  const contextData = useContext(ContextPlanet);
  const {
    // data,
    inputFilterValue,
    filteredPlanets,
    order,
    columnOrder,
    planetKeys,
  } = contextData;

  // if (!data || (data.length === 0)) return <p>loading...</p>;// Refatorar para carregar uma tela de loading

  return (
    <main>
      <h1>Acesso Confidencial - StarWars Planets</h1>
      <table>
        <thead>
          {/* Criando linha com as keys dinâmicamente do elemento na posição [0] */}
          <tr>
            {
              planetKeys.map((rowProps) => <th key={ rowProps }>{ rowProps }</th>)
            }
          </tr>
        </thead>
        <tbody>
          { filteredPlanets
            .filter((planet) => (planet.name.includes(inputFilterValue.toLowerCase())))
            .sort((a, b) => {
              let elemA = a[columnOrder];
              let elemB = b[columnOrder];

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
            .map((item, index) => (
              <tr key={ index }>
                {planetKeys.map((key, indx) => (
                  <td key={ indx } data-testid={ key === 'name' ? 'planet-name' : '' }>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
