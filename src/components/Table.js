import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { resultsAPI, filterTable } = useContext(PlanetsContext);
  const getContext = useContext(PlanetsContext);
  let newResult = resultsAPI;
  const {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  } = filterTable;

  function handleClickRemove(column) {
    getContext.handleRemoveFilterTable(column);
  }

  function switchColumBigger(column, value) {
    switch (column) {
    case 'population':
      newResult = newResult
        .filter((newRe) => Number(newRe.population) > Number(value));
      break;
    case 'orbital_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.orbital_period) > Number(value));
      break;
    case 'diameter':
      newResult = newResult
        .filter((newRe) => Number(newRe.diameter) > Number(value));
      break;
    case 'rotation_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.rotation_period) > Number(value));
      break;
    case 'surface_water':
      newResult = newResult
        .filter((newRe) => Number(newRe.surface_water) > Number(value));
      break;
    default:
      break;
    }
  }

  function switchColumSmaller(column, value) {
    switch (column) {
    case 'population':
      newResult = newResult
        .filter((newRe) => Number(newRe.population) < Number(value));
      break;
    case 'orbital_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.orbital_period) < Number(value));
      break;
    case 'diameter':
      newResult = newResult
        .filter((newRe) => Number(newRe.diameter) < Number(value));
      break;
    case 'rotation_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.rotation_period) < Number(value));
      break;
    case 'surface_water':
      newResult = newResult
        .filter((newRe) => Number(newRe.surface_water) < Number(value));
      break;
    default:
      break;
    }
  }

  function switchColumEqual(column, value) {
    switch (column) {
    case 'population':
      newResult = newResult
        .filter((newRe) => Number(newRe.population) === Number(value));
      break;
    case 'orbital_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.orbital_period) === Number(value));
      break;
    case 'diameter':
      newResult = newResult
        .filter((newRe) => Number(newRe.diameter) === Number(value));
      break;
    case 'rotation_period':
      newResult = newResult
        .filter((newRe) => Number(newRe.rotation_period) === Number(value));
      break;
    case 'surface_water':
      newResult = newResult
        .filter((newRe) => Number(newRe.surface_water) === Number(value));
      break;
    default:
      break;
    }
  }

  function switchComparsion(comparison, column, value) {
    switch (comparison) {
    case 'maior que':
      switchColumBigger(column, value);
      break;
    case 'menor que':
      switchColumSmaller(column, value);
      break;
    case 'igual a':
      switchColumEqual(column, value);
      break;
    default:
      break;
    }
  }

  return (
    <div>
      <ul>
        {
          filterByNumericValues
            .map((filterByNumericValue, index) => (
              <li key={ index } data-testid="filter">
                { filterByNumericValue.column }
                { ' - ' }
                { filterByNumericValue.comparison }
                { ' - ' }
                { filterByNumericValue.value }
                { ' - ' }
                <button
                  type="button"
                  onClick={ () => handleClickRemove(filterByNumericValue.column) }
                >
                  X
                </button>
              </li>
            ))
        }
      </ul>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            filterByNumericValues.filter((filterValues) => (
              switchComparsion(
                filterValues.comparison, filterValues.column, filterValues.value,
              )
            ))
          }
          {
            newResult
              .filter((resultAPI) => resultAPI.name.includes(name))
              .map((resultAPI, index) => (
                <tr key={ index }>
                  <td>{ resultAPI.name }</td>
                  <td>{ resultAPI.rotation_period }</td>
                  <td>{ resultAPI.orbital_period }</td>
                  <td>{ resultAPI.diameter }</td>
                  <td>{ resultAPI.climate }</td>
                  <td>{ resultAPI.gravity }</td>
                  <td>{ resultAPI.terrain }</td>
                  <td>{ resultAPI.surface_water }</td>
                  <td>{ resultAPI.population }</td>
                  <td>
                    {
                      resultAPI.films
                        .map((film, indexFilm) => (
                          <span key={ indexFilm }>{ film }</span>
                        ))
                    }
                  </td>
                  <td>{ resultAPI.created }</td>
                  <td>{ resultAPI.edited }</td>
                  <td>{ resultAPI.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
