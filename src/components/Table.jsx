import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const headers = ['name', 'climate', 'created', 'diameter', 'edited', 'films', 'gravity',
  'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain', 'url'];

const filterPlanets = (data, filter) => {
  const { filterByName: name, filterByNumerics, order } = filter;

  let nameFilter = data.filter((planet) => planet.name.includes(name));

  filterByNumerics.forEach((f) => {
    const { column, comparison, value } = f;
    nameFilter = nameFilter.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > value;
      case 'menor que':
        return parseInt(planet[column], 10) < value;
      case 'igual a':
        return planet[column] === value;
      default:
        return '';
      }
    });
  });

  const sortValues = (a, b) => {
    const { column } = order;
    const ONE = 1;
    const item1 = column === 'name' ? a[column] : parseInt(a[column], 10);
    const item2 = column === 'name' ? b[column] : parseInt(b[column], 10);

    if (item1 < item2) {
      return -ONE;
    }
    if (item1 > item2) {
      return ONE;
    }
    return 0;
  };

  nameFilter = nameFilter.sort((a, b) => {
    const { sort } = order;
    return sort === 'ASC' ? sortValues(a, b) : sortValues(b, a);
  });

  return nameFilter;
};

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const filteredPlanets = filterPlanets(data, filter);
    setPlanets(filteredPlanets);
  }, [data, filter]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((field, index) => <th key={ index }>{ field }</th>)}
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => (
            <tr key={ planet.name }>
              {
                headers.map((field, index) => (
                  field === 'name'
                    ? <td key={ index } data-testid="planet-name">{ planet[field] }</td>
                    : <td key={ index }>{ planet[field] }</td>
                ))
              }
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
