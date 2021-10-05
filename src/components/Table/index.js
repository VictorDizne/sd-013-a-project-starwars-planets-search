import React, { useContext, useState, useEffect } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import { ThemeContext } from '../../context/ThemeContext';
import formatDate from '../../services/formatDate';
import FilterInput from '../FilterInput';
import ThemeToggle from '../ThemeToggle';
import './Table.css';

const GenerateTable = (data) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const themedStyle = {
    background: theme.ui,
    color: theme.syntax,
  };

  return data.map((planet) => (
    <tr key={ planet.name }>
      <td data-testid="planet-name" style={ themedStyle }>{planet.name}</td>
      <td style={ themedStyle }>{planet.rotation_period}</td>
      <td style={ themedStyle }>{planet.orbital_period}</td>
      <td style={ themedStyle }>{planet.diameter}</td>
      <td style={ themedStyle }>{planet.climate}</td>
      <td style={ themedStyle }>{planet.gravity}</td>
      <td style={ themedStyle }>{planet.terrain}</td>
      <td style={ themedStyle }>{planet.surface_water}</td>
      <td style={ themedStyle }>{planet.population}</td>
      <td style={ themedStyle }>{planet.films.length}</td>
      <td style={ themedStyle }>{formatDate(planet.created)}</td>
      <td style={ themedStyle }>{formatDate(planet.edited)}</td>
      <td
        style={ themedStyle }
      >
        <a href={ planet.url } rel="noreferrer" target="_blank">{planet.url}</a>
      </td>
    </tr>
  ));
};

const filterPlanets = ({ filterByNumericValues, filterByName }, oldData) => {
  let filtered = oldData.filter((planet) => (
    planet.name.includes(filterByName.name)
  ));

  if (filterByNumericValues.length === 0) {
    return filtered;
  }

  filterByNumericValues.forEach((filter) => {
    filtered = filtered.filter((planet) => {
      if (filter.comparison === 'maior que') {
        return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
      }

      if (filter.comparison === 'menor que') {
        return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
      }

      return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
    });
  });

  return filtered;
};

const SortPlanets = (data, filters) => {
  const { order } = filters;
  const { column, sort } = order;

  const sortByColumn = () => {
    if (column === 'population') {
      const sortByPopulation = sort === 'ASC'
        ? data.sort((a, b) => a.population - b.population)
        : data.sort((a, b) => b.population - a.population);

      return sortByPopulation;
    }

    if (column === 'name') {
      const sortByName = sort === 'ASC'
        ? data.sort((a, b) => a.name.localeCompare(b.name))
        : data.sort((a, b) => b.name.localeCompare(a.name));

      return sortByName;
    }

    if (column === 'orbital_period') {
      const sortByOrbitalPeriod = sort === 'ASC'
        ? data.sort((a, b) => a.orbital_period - b.orbital_period)
        : data.sort((a, b) => b.orbital_period - a.orbital_period);

      return sortByOrbitalPeriod;
    }

    return GenerateTable(data);
  };

  return GenerateTable(sortByColumn());
};

const Table = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { data, filters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const [filteredData, setFilteredData] = useState([]);
  const theme = isLightTheme ? light : dark;
  const themedStyle = {
    background: theme.ui,
    color: theme.syntax,
  };

  useEffect(() => {
    setFilteredData(filterPlanets(filters, data));
  }, [filters, data, filterByNumericValues]);

  return (
    <main className="table-container">
      <ThemeToggle />
      <div className="title-search-input">
        <h1>Star Wars Planets</h1>
        <FilterInput />
      </div>
      <table>
        <tbody>
          <tr>
            <th style={ themedStyle }>Name</th>
            <th style={ themedStyle }>Rotation Period</th>
            <th style={ themedStyle }>Orbital Period</th>
            <th style={ themedStyle }>Diameter</th>
            <th style={ themedStyle }>Climate</th>
            <th style={ themedStyle }>Gravity</th>
            <th style={ themedStyle }>Terrain</th>
            <th style={ themedStyle }>Surface Water</th>
            <th style={ themedStyle }>Population</th>
            <th style={ themedStyle }>Films</th>
            <th style={ themedStyle }>Create</th>
            <th style={ themedStyle }>Edited</th>
            <th style={ themedStyle }>URL</th>
          </tr>
          {SortPlanets(filteredData, filters)}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
