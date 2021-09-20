import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';

const Table = () => {
  // const { data, filters: { filterByName: name }, filterData, filters } = useContext(PlanetContext);
  const { data, filterData, filters } = useContext(MyContext);
  // const { filters: { filterByName: name } } = filters;

  // const { data, filters: { filterByName: name }, filterData } = useContext(PlanetContext);
  const [filteredPlanets, setFilteredPlanetes] = useState(data);

  const getData = () => {
    const firstPlanet = data[0];
    if (firstPlanet) {
      const planetData = Object.keys(firstPlanet);
      // console.log(planetData);
      const index = planetData.indexOf('residents');
      planetData.splice(index, 1);
      return planetData;
    }
  };
  const titles = getData();
  useEffect(() => {
    setFilteredPlanetes(data);
  }, [data]);
  useEffect(() => {
    const filter = filterData();
    setFilteredPlanetes(filter);
    // console.log(filteredPlanets, 'filteredPlanets');
  }, [filters]);

  if (!data.length) return <p>loading</p>;
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
          filteredPlanets && filteredPlanets.map((planet, index1) => (
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
