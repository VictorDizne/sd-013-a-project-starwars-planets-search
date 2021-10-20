import React, { useContext, useState, useEffect } from 'react';
// import PlanetsFilter from '../componentes/PlanetsFilter';
import contextApp from '../context/contextApp';

function Table() {
  const { data } = useContext(contextApp);
  // const [filter] = useState('');

  // const handleFilter = (e) => {
  //   setFilters(e.target.value);
  // };

  //   return (
  //     <div>
  //       {/* <PlanetsFilter /> */}
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>name</th>
  //             <th>rotation_period</th>
  //             <th>orbital_period</th>
  //             <th>diameter</th>
  //             <th>climate</th>
  //             <th>gravity</th>
  //             <th>terrain</th>
  //             <th>surface_water</th>
  //             <th>population</th>
  //             <th>films</th>
  //             <th>created</th>
  //             <th>edited</th>
  //             <th>url</th>
  //           </tr>
  //         </thead>

  //         <tbody>
  //           { data.map((planet, index) => (
  //             <tr key={ index }>
  //               <td>{ planet.name }</td>
  //               <td>{ planet.rotation_period }</td>
  //               <td>{ planet.orbital_period }</td>
  //               <td>{ planet.diameter }</td>
  //               <td>{ planet.climate }</td>
  //               <td>{ planet.gravity }</td>
  //               <td>{ planet.terrain }</td>
  //               <td>{ planet.surface_water }</td>
  //               <td>{ planet.population }</td>
  //               <td>{ planet.films }</td>
  //               <td>{ planet.created }</td>
  //               <td>{ planet.edited }</td>
  //               <td>{ planet.url }</td>
  //             </tr>))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }

  const { dataError, filters: {
    filterByName, filterByNumericValues } } = useContext(contextApp);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [data, filterByName]);

  const filterNumericValues = (planetsData, column, comparison, value) => {
    let filteredPlanets;

    if (comparison === 'maior que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) > Number(value)
      ));
    }

    if (comparison === 'menor que') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) < Number(value)
      ));
    }
    if (comparison === 'igual a') {
      filteredPlanets = planetsData.filter((planet) => (
        Number(planet[column]) === Number(value)
      ));
    }
    return filteredPlanets;
  };

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setPlanets((prevPlanets) => {
        if (prevPlanets.length < 1) {
          if (!filterByName.name) {
            return filterNumericValues(data, column, comparison, value);
          }
          const filteredByName = data.filter(({ name }) => (
            name.includes(filterByName.name)
          ));
          return filterNumericValues(filteredByName, column, comparison, value);
        }
        return filterNumericValues(prevPlanets, column, comparison, value);
      })
    ));
  }, [data, filterByName, filterByNumericValues]);

  return (data.length > 0 && !dataError)
    && (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => (
            <tr key={ i }>
              {Object.keys(planet).map((column, j) => (
                <td key={ j }>{planet[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Table;
