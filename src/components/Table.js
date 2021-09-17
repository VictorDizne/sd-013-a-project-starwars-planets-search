import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const Table = () => {
  const { data } = useContext(PlanetContext);

  const getData = () => {
    const firstPlanet = data[0];
    if (firstPlanet) {
      const planetData = Object.keys(firstPlanet);
      console.log(planetData);
      const index = planetData.indexOf('residents');
      planetData.splice(index, 1);
      return planetData;
    }
  };

  const titles = getData();

  // const filteredData = planetData.splice('residents');

  return (
    <table>
      <thead>
        <tr>
          {
            titles && titles.map((title, index) => (<th key={ index }>{ title }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          titles && data.map((planet, index1) => (
            <tr key={ index1 }>
              {
                titles.map((title, index2) => (
                  <td key={ index2 }>{planet[title]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
