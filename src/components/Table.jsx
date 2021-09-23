import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import NameFilter from './NameFilter';
import './table.css';

function Table() {
  const {
    objectProvider: { numberFilter, filterPlanet, firstObject, data },
  } = useContext(PlanetsContext);

  const headerKeys = Object.keys(firstObject);
  const { filters: { filterByName: { name } } } = filterPlanet;

  const myProps = {
    name,
    data,
    numberFilter,
  };

  return (
    <table className="table">
      <tr className="tr">
        {headerKeys.filter((info) => info !== 'residents')
          .map((key, idx) => (
            <th className="th" key={ idx }>{ key }</th>
          ))}
      </tr>
      <NameFilter value={ myProps } />
    </table>
  );
}

export default Table;
