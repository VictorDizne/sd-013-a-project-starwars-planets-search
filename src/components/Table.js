import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

const filterByNumericValue = (data, objContext) => {
  const { filterByNumericValues: filterList } = objContext.filters;

  if (filterList.length === 0) return data;
  const { value, column, comparison } = filterList[filterList.length - 1];
  switch (comparison) {
  case 'maior que':
    return Number(data[column]) > Number(value);
  case 'menor que':
    return Number(data[column]) < Number(value);
  case 'igual a':
    return Number(data[column]) === Number(value);
  default:
    return data;
  }
};

export default function Table() {
  const { swapi } = useContext(ContextSwapi);

  if (!swapi) return null;

  const { name } = swapi.filters.filterByName;
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {swapi.data
          .filter((data) => data.name.toLowerCase().includes(name))
          .filter((data) => filterByNumericValue(data, swapi))
          .map((item) => (
            <tr key={ item.name }>
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
            </tr>))}
      </tbody>
    </table>
  );
}
