import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, dataKey } = useContext(MyContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const [selectFilters, setSelectFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target: { value: values } }) => {
    setFilters({ ...filters, filterByName: { name: values } });
  };

  const handleSelect = ({ target: { value: values, name } }) => {
    setSelectFilters((prevState) => ({
      ...prevState,
      [name]: values,
    }));
  };

  const filterInput = () => {
    const { filterByName: { name } } = filters;
    const result = data
      .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    return result;
  };

  const handleClick = () => {
    const { column, value, comparison } = selectFilters;
    const result = data;

    switch (comparison) {
    case 'maior que':
      return result.filter((item) => item[column] > value);

    case 'menor que':
      return result.filter((item) => item[column] < value);

    case 'igual a':
      return result.filter((item) => item[column] === value);
    default: return result;
    }
  };

  return (
    <div>
      <label htmlFor="search">
        Pesquisar
        <input
          data-testid="name-filter"
          type="text"
          id="search"
          onChange={ handleChange }
          name="name"
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ handleSelect }
        name="column"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleSelect }
        name="comparison"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="number">
        <input
          type="number"
          id="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleSelect }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <table border="1px">
        <thead>
          <tr>
            {dataKey.map((item) => <th key={ item }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {filterInput().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
