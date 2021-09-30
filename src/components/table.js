import React, { useContext } from 'react';
import apiContext from '../contexts/apiContext';

function TableItems() {
  const { data, loaded, dataFiltered } = useContext(apiContext);

  const renderTds = () => {
    if (loaded) {
      return dataFiltered.map((el) => (
        <tbody key={ el.name }>
          <tr key={ el.name }>
            <td>{el.name}</td>
            <td>{el.rotation_period}</td>
            <td>{el.orbital_period}</td>
            <td>{el.diameter}</td>
            <td>{el.climate}</td>
            <td>{el.gravity}</td>
            <td>{el.terrain}</td>
            <td>{el.surface_water}</td>
            <td>{el.population}</td>
            <td>{el.films}</td>
            <td>{el.created}</td>
            <td>{el.edited}</td>
            <td>{el.url}</td>
          </tr>
        </tbody>));
    }
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            {loaded
              && Object.keys(data[0]).map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </thead>
        {loaded && renderTds()}
      </table>
    </section>
  );
}

export default TableItems;
