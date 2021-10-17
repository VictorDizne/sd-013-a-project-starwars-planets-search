import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function Table() {
  const contextData = useContext(ContextPlanet);
  const { data, inputFilterValue } = contextData;// 2° Req

  if (!data || (data.length === 0)) return <p>loading...</p>;// Refatorar para carregar uma tela de loading
  const filterByInput = data.filter((planet) => (
    planet.name.toLowerCase().includes(inputFilterValue.toLowerCase())));
  // Convertendo data para um objeto com o Object.assing para poder obter as keys das propriedades
  // Daí é só aplicar o Object.Keys no objData
  const convertData = {};
  const objData = Object.assign(convertData, data[0]);

  return (
    <main>
      <h1>Acesso Confidencial - StarWars Planets</h1>
      <table>
        <thead>
          {/* Criando linha com nome de cada planeta */}
          <tr>
            {
              Object.keys(objData)
                .map((rowProps) => <th key={ rowProps }>{ rowProps }</th>)
            }
          </tr>
        </thead>
        <tbody>
          { filterByInput.map((item, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  );
}
