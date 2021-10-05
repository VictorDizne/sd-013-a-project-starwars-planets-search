import React from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const size = 0.7;
  return (
    <PlanetsContext.Consumer>
      { (contextValue) => {
        const { data } = contextValue;
        const { filter } = contextValue;

        const filteredData = data
          .filter((planet) => planet.name.includes(filter.filterByName));

        return (
          <table border="1" style={ { fontSize: `${size} em` } }>
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
                <td>films</td>
                <td>created</td>
                <td>edited</td>
                <td>url</td>
              </tr>
            </thead>
            <tbody>
              {
                filteredData.map((item) => (
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
                ))
              }
            </tbody>
          </table>
        );
      }}
    </PlanetsContext.Consumer>
  );
}

export default Table;
