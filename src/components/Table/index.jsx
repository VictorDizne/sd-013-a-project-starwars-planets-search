import React, { useContext } from 'react';
import { PlanetsContext } from '../../context';
import Planet from '../Planet';

// LINK https://stackoverflow.com/a/1129270

const Table = () => {
  const { planets,
    titles,
    filters: { filterByName: { name: query },
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

        {planets
          .sort((a, b) => {
            if (['rotation_period', 'orbital_period', 'diameter'].includes(sortColumn)) {
              if (typeSort === 'ASC') return a[sortColumn] - b[sortColumn];
              if (typeSort === 'DESC') return b[sortColumn] - a[sortColumn];
            }

            if (
              (a[sortColumn] < b[sortColumn] && typeSort === 'ASC')
              || (a[sortColumn] > b[sortColumn] && typeSort === 'DESC')
            ) {
              return -1;
            }
            if (
              (a[sortColumn] > b[sortColumn] && typeSort === 'ASC')
              || (a[sortColumn] < b[sortColumn] && typeSort === 'DESC')
            ) {
              return 1;
            }
            return 0;
          })
          // filtro coluna
          .filter((planet) => {
            const validate = filterByNumericValues.every((
              { column, comparison, value },
            ) => {
              if (comparison === 'maior que') {
                return Number(planet[column]) > Number(value);
              }
              if (comparison === 'menor que') {
                return Number(planet[column]) < Number(value);
              }
              if (comparison === 'igual a') {
                return Number(planet[column]) === Number(value);
              }
              return false;
            });
            return validate ? planet : null;
          })
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
