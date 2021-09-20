import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import './table.css';

function Table() {
  const {
    objectProvider: { filterPlanet, firstObject, filterData },
  } = useContext(PlanetsContext);

  const headerKeys = Object.keys(firstObject);
  const { filters: { filterByName: { name } } } = filterPlanet;

  return (
    <table className="table">
      <tr className="tr">
        {headerKeys.filter((info) => info !== 'residents')
          .map((key, idx) => (
            <th className="th" key={ idx }>{ key }</th>
          ))}
      </tr>
      {
        filterData.filter((test) => test.name.toLowerCase().includes(name.toLowerCase()))
          .map((info, idx) => (
            <tr className="tr" key={ idx }>
              <td className="td">{ info.name }</td>
              <td className="td">{ info.rotation_period }</td>
              <td className="td">{ info.orbital_period }</td>
              <td className="td">{ info.diameter }</td>
              <td className="td">{ info.climate }</td>
              <td className="td">{ info.gravity }</td>
              <td className="td">{ info.terrain }</td>
              <td className="td">{ info.surface_water }</td>
              <td className="td">{ info.population }</td>
              <td className="td">{ info.films }</td>
              <td className="td">{ info.created }</td>
              <td className="td">{ info.edited }</td>
              <td className="td"><a href={ info.url }>{ info.url }</a></td>
            </tr>
          ))
      }
    </table>
  );
}

export default Table;
