import React, { useContext } from 'react';
import { Context } from '../context/MyContext';
import Filters from './Filters';

function Table() {
  const { data, filters } = useContext(Context);

  /*  com ajuda do meu grande amigo lailson gabriel turbo turma 13 -b */
  const results = data.filter((item) => delete item.residents);
  const filtrado = results
    .filter((item) => item.name.includes(filters.filterByName.name));
  const yuri = ['name', 'rotation_period',
    'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population',
    'films', 'created', 'edited', 'url'];
  return (
    <div>
      {console.log(filters.filterByName.name)}
      {console.log(filtrado)}
      <Filters />
      <table>
        <thead>
          <tr>
            {yuri.map((stat, index) => (
              <th key={ index }>
                {stat}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtrado.map((item, index) => (
            <tr key={ index }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
}

export default Table;
