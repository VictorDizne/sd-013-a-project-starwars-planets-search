// https://blog.betrybe.com/javascript/javascript-map/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { dataFilter, dataPlanets } = useContext(Context);

  let filterPlanets = dataPlanets.reduce((__, acc) => acc, []);
  filterPlanets = Object.keys(filterPlanets).filter((key) => key !== 'residents');

  const header = filterPlanets.map((element, index) => (
    <th key={ index }>{ element }</th>
  ));

  return (
    <table>
      <thead>
        <tr>
          { header }
        </tr>
      </thead>
      <tbody>
        { dataFilter.map((element) => (
          <tr key={ element.name }>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
export default Table;
