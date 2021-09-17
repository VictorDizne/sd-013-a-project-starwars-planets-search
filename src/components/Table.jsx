import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const contexto = useContext(Context);
  const { data } = contexto;
  const newData = data.filter((item) => delete item.residents);
  const dataHeaders = newData.map((item) => Object.keys(item));
  // console.log(newData);

  const handleTable = () => (
    <table>
      <thead>
        <tr>
          {dataHeaders[0].map((item, i) => <th key={ i }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {newData.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      { data.length === 0 ? <h1>llloading...</h1> : handleTable() }
    </div>
  );
};

export default Table;
