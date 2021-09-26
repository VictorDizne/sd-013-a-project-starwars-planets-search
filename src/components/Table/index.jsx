import React, { useContext } from 'react';
import { PlanetsContext } from '../../context';
import Planet from '../Planet';
import { compareColumns, filterColumns } from './helpers';
// LINK https://stackoverflow.com/a/1129270

const Table = () => {
  const { planets,
    titles,
    filters: {
      filterByName: { name: query },
      filterByNumericValues, order: { column: sortColumn, sort: typeSort } },
  } = useContext(PlanetsContext);
  if (planets.length === 0) return <div>Carregando</div>;

  return (
    <table>
      <thead>
        <tr>
          {titles
            .map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>

        {compareColumns(planets, sortColumn, typeSort)
          // filtro coluna
          .filter((planet) => filterColumns(planet, filterByNumericValues))
          // filtro nome
          .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
          .map((planet) => (
            <Planet key={ planet.name } planet={ planet } />
          ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {

};

export default Table;
