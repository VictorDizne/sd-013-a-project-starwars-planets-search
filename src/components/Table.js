import React from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  return (
    <PlanetsContext.Consumer>
      { (data) => (
        <table border="1">
          <thead>
            <tr>
              <td>Name</td>
              <td>Rotation_period</td>
              <td>Orbital_period</td>
              <td>Diameter</td>
              <td>Climate</td>
              <td>Gravity</td>
              <td>Terrain</td>
              <td>Surface_water</td>
              <td>Population</td>
            </tr>
          </thead>
          {
            data.map((item) => (
              <tbody key={ item.name }>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.rotation_period}</td>
                  <td>{item.orbital_period}</td>
                  <td>{item.diameter}</td>
                  <td>{item.climate}</td>
                  <td>{item.gravity}</td>
                  <td>{item.terrain}</td>
                  <td>{item.surface_water}</td>
                  <td>{item.population}</td>
                </tr>
              </tbody>))
          }
        </table>
      )}
    </PlanetsContext.Consumer>
  );
}

export default Table;
