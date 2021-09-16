import React, { useContext } from 'react';
import { PlanetsContext } from '../../context';
import Planet from '../Planet';

const Table = () => {
  const { planets, titles, queryFilter } = useContext(PlanetsContext);
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
          .filter((planet) => planet.name.toLowerCase()
            .includes(queryFilter.toLowerCase()))
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
