import React, { useContext } from 'react';
import Context from '../context/Context';
import Thead from './Thead';

const Table = () => {
  const { data, filters: { filterNumber } } = useContext(Context);
  const arrayFilter = Array.from(filterNumber);

  const filtersValues = () => {
    if (filterNumber.column !== '') {
      arrayFilter.push(filterNumber);
      return arrayFilter
        .map(({ column, value, comparison }) => (
          <p key={ column }>{` ${column} ${comparison} ${value} `}</p>
        ));
    }
  };

  return (
    <table>
      { filtersValues() }
      <Thead />
      {data.map((item) => (
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
        </tr>
      ))}
    </table>
  );
};

export default Table;
