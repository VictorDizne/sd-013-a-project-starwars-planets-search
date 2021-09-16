import React, { useContext, useState } from 'react';
import myContext from '../context/MyContext';

function Table() {
  const { data, dataKeys } = useContext(myContext);
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

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleSelect = ({ target: { value: values, name } }) => {
    setSelectFilters((prevState) => ({
      ...prevState,
      [name]: values,
    }));
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

  const filterPlanet = () => {
    const { filterByName: { name } } = filters;
    const resultado = data
      .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    return resultado;
  };

  return (
    <div>
      <label htmlFor="texto">
        Buscar
        <input
          type="text"
          id="texto"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
      <select data-testid="column-filter" name="column" onChange={ handleSelect }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleSelect }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="number">
        Value
        <input
          data-testid="value-filter"
          type="number"
          id="number"
          name="value"
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
            { dataKeys.map((item) => <th key={ item }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {filterPlanet().map((planeta) => (
            <tr key={ planeta.name }>
              <td>{ planeta.name }</td>
              <td>{ planeta.rotation_period }</td>
              <td>{ planeta.orbital_period }</td>
              <td>{ planeta.diameter }</td>
              <td>{ planeta.climate }</td>
              <td>{ planeta.gravity }</td>
              <td>{ planeta.terrain }</td>
              <td>{ planeta.surface_water }</td>
              <td>{ planeta.population }</td>
              <td>{ planeta.films }</td>
              <td>{ planeta.created }</td>
              <td>{ planeta.edited }</td>
              <td>{ planeta.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
