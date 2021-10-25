import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const {
    planets,
    loaded,
    filter: {
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: {
          column,
          comparison,
          valor,
        },
      },
    },
    filtered,
  } = useContext(Context);
  // console.log(name);
  const compare = () => {
    switch (comparison) {
    case 'maior que':
      return planets.filter((planet) => (Number(planet[column]) > Number(valor)));
    case 'menor que':
      return planets.filter((planet) => (Number(planet[column]) < Number(valor)));
    case 'igual a':
      return planets.filter((planet) => (Number(planet[column]) === Number(valor)));
    default:
      return null;
    }
  };

  const renderiza = () => {
    if (loaded) {
      if (filtered) {
        return compare().map((planet) => (
          <tr key={ `${planet.name}` }>
            {Object.values(planet).map((planetData, index) => (
              <td key={ index }>{ planetData }</td>
            ))}
          </tr>
        ));
      }
      return planets.filter((planet) => (
        planet.name.toLowerCase().includes(name)
      )).map((planet) => (
        <tr key={ `${planet.name}` }>
          {Object.values(planet).map((planetData, index) => (
            <td key={ `${planet.name}-${index}` }>{ planetData }</td>
          ))}
        </tr>
      ));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {loaded && Object.keys(planets[0]).map((category, index) => (
            <th key={ `${category}-${index}` }>{ category }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {renderiza()}
        {/* {loaded && planets.filter((planet) => (
          planet.name.toLowerCase().includes(name)
        )).map((planet) => (
          <tr key={ `${planet.name}` }>
            {Object.values(planet).map((planetData, index) => (
              <td key={ `${planet.name}-${index}` }>{ planetData }</td>
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

// {loaded && planets.filter((planet) => (
//   planet.name.toLowerCase().includes(filter.filters.filterByName.name)
// )).map((planet) => (
//   <tr key={ `${planet.name}` }>
//     {Object.values(planet).map((planetData, index) => (
//       <td key={ `${planet.name}-${index}` }>{ planetData }</td>
//     ))}
//   </tr>
// ))}

export default Table;
