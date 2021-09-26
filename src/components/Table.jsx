import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const switchPop = (comparison, acc, value) => {
  switch (comparison) {
  case 'maior que':
    return acc.filter((item2) => Number(item2.population) > Number(value));
  case 'menor que':
    return acc.filter((item2) => Number(item2.population) < Number(value));
  case 'igual a':
    return acc.filter((item2) => Number(item2.population) === Number(value));
  default:
    return [];
  }
};

const switchOrb = (comparison, acc, value) => {
  switch (comparison) {
  case 'maior que':
    return acc.filter((item2) => Number(item2.orbital_period) > Number(value));
  case 'menor que':
    return acc.filter((item2) => Number(item2.orbital_period) < Number(value));
  case 'igual a':
    return acc.filter((item2) => Number(item2.orbital_period) === Number(value));
  default:
    return [];
  }
};

const switchDia = (comparison, acc, value) => {
  switch (comparison) {
  case 'maior que':
    return acc.filter((item2) => Number(item2.diameter) > Number(value));
  case 'menor que':
    return acc.filter((item2) => Number(item2.diameter) < Number(value));
  case 'igual a':
    return acc.filter((item2) => Number(item2.diameter) === Number(value));
  default:
    return [];
  }
};

const switchRotSur = (comparison, acc, column, value) => {
  switch (column) {
  case 'rotation_period':
    switch (comparison) {
    case 'maior que':
      return acc.filter((item2) => Number(item2.rotation_period) > Number(value));
    case 'menor que':
      return acc.filter((item2) => Number(item2.rotation_period) < Number(value));
    case 'igual a':
      return acc.filter((item2) => Number(item2.rotation_period) === Number(value));
    default:
      return [];
    }
  case 'surface_water':
    switch (comparison) {
    case 'maior que':
      return acc.filter((item2) => Number(item2.surface_water) > Number(value));
    case 'menor que':
      return acc.filter((item2) => Number(item2.surface_water) < Number(value));
    case 'igual a':
      return acc.filter((item2) => Number(item2.surface_water) === Number(value));
    default:
      return [];
    }
  default:
    return [];
  }
};

export default function Table() {
  const { context } = useContext(StarWarsContext);

  if (!context) return null;
  const { data,
    filters: {
      filterByName,
      filterByNumericValues } } = context;

  const filtradoz = () => {
    const filtradosPorNome = data.filter((item) => item.name.includes(filterByName.name));
    return filterByNumericValues.reduce((acc, objComparativo) => {
      const { comparison, column, value } = objComparativo;
      if (column === 'population') return switchPop(comparison, acc, value);
      if (column === 'orbital_period') return switchOrb(comparison, acc, value);
      if (column === 'diameter') return switchDia(comparison, acc, value);
      if (column === 'rotation_period'
      || column === 'surface_water') return switchRotSur(comparison, acc, column, value);
      return [];
    }, filtradosPorNome);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surfaceWater</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filtradoz().map((item, index) => (
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
  );
}
