import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const data = useContext(MyContext);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: target.value,
      },
    });
  };
  // estados e setStates
  const [filtered, setfiltered] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'rotation_period', 'surface_water', 'diameter'],
  );
  // Requisito 03
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  useEffect(() => {
    function filterByInput() {
      let newArray = [...data];
      if (newArray.length > 0 && filter.filterByName.name) {
        newArray = newArray
          .filter((item) => item.name.toLowerCase()
            .includes(filter.filterByName.name.toLowerCase()));
      }
      setfiltered(newArray);
    }
    filterByInput();
  },
  [data, filter]);

  const handleFilterByNumericValue = () => {
    setfilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
    const columnsFiltered = columns.filter((columnValue) => columnValue !== column);
    setColumns(columnsFiltered);
    switch (comparison) {
    case 'maior que':
      return setfiltered(filtered.filter((planet) => planet[column] > Number(value)));
    case 'menor que':
      return setfiltered(filtered.filter((planet) => planet[column] < Number(value)));
    case 'igual a':
      return setfiltered(filtered.filter((planet) => planet[column] === value));
    default:
      return filtered;
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
      <form>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            data-testid="column-filter"
            onChange={ ({ target }) => (setColumn(target.value)) }
          >
            {columns.map((columnValue, index) => (
              <option key={ index } value={ columnValue }>{ columnValue }</option>)) }
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            onChange={ ({ target }) => (setComparison(target.value)) }
          >
            <option value="" defaultValue>Selecione sua opção</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            type="number"
            data-testid="value-filter"
            id="value"
            name="value"
            onChange={ ({ target }) => (setValue(target.value)) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          name="add-filter"
          onClick={ handleFilterByNumericValue }
        >
          Filter
        </button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Planet</th>
            <th>Gravity</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>URL</th>
          </tr>
          {
            filtered.map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films.map((film, i) => (<p key={ i }>{ film }</p>)) }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>
                  <a
                    href={ planet.url }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    { planet.url }
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
