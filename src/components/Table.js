import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  const RESIDENT_INDEX = 9;
  // const name = props.filters.filterByName.name;
  // useEffect(() => <p>{name}</p>, [name]);
  const {
    planets,
    filters: {
      filterByName,
      filterByNumericValues,
      order,
    },
  } = props;

  const createHeaderColumns = (planet) => (
    Object.keys(planet).map((key, index) => (
      index !== RESIDENT_INDEX && <th key={ index }>{key}</th>
    ))
  );

  const createHeaderRow = (planet) => (
    <thead>
      <tr>{createHeaderColumns(planet)}</tr>
    </thead>
  );

  const createColumns = (planet) => (
    Object.values(planet).map((value, index) => (
      index !== RESIDENT_INDEX) && <td key={ index }>{value}</td>)
  );

  const createRows = (planetsArr) => (
    <tbody>
      {planetsArr
        .map((planet, index) => <tr key={ index }>{createColumns(planet)}</tr>)}
    </tbody>
  );

  const filterPlanetsByName = (planetsArr, { name }) => planetsArr
    .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));

  const filterPlanetsByNumericValues = (planetsArr, { numericFilters }) => {
    let updatedPlanets = [...planetsArr];
    if (numericFilters.length > 0) {
      numericFilters.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          updatedPlanets = updatedPlanets.filter(
            (planet) => parseInt(planet[column], 10) > value,
          );
        } if (comparison === 'menor que') {
          updatedPlanets = updatedPlanets.filter(
            (planet) => parseInt(planet[column], 10) < value,
          );
        } if (comparison === 'igual a') {
          updatedPlanets = updatedPlanets.filter(
            (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
          );
        }
      });
      return updatedPlanets;
    } return planetsArr;
  };

  const { name } = filterByName;

  const filtersObj = { name, numericFilters: filterByNumericValues, order };

  const filterPlanets = (planetsArr, filters) => {
    const filteredByName = filterPlanetsByName(planetsArr, filters);
    const filteredByNumericValue = filterPlanetsByNumericValues(filteredByName, filters);
    return filteredByNumericValue;
  };

  return (
    <table>
      {createHeaderRow(planets[0])}
      {createRows(filterPlanets(planets, filtersObj))}
    </table>
  );
}

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    filterByName: PropTypes.objectOf(PropTypes.string),
    filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
    order: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
