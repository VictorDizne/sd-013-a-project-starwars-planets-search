import React, { useContext, useState } from 'react';
import myContext from '../context/MyContext';

function Table() {
  const { data, dataKeys } = useContext(myContext);
  const [movie, setMovie] = useState([]);
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

  const filterPlanet = () => {
    const { filterByName: { name } } = filters;
    if (movie.length === 0) {
      return data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }
    return movie;
  };

  const handleClick = () => {
    const { column, comparison, value } = selectFilters;
    if (comparison === 'maior que') {
      const moveValue = data
        .filter((item) => Number(item[column]) > Number(value));
      return setMovie(moveValue);
    }
    if (comparison === 'menor que') {
      const moveValue = data
        .filter((item) => Number(item[column]) < Number(value));
      return setMovie(moveValue);
    }
    if (comparison === 'igual a') {
      const moveValue = data
        .filter((item) => Number(item[column]) === Number(value));
      return setMovie(moveValue);
    }
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
      <select
        data-testid="column-filter"
        name="column"
        id="select-1"
        onChange={ handleSelect }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="select-2"
        onChange={ handleSelect }
      >
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
        onClick={ () => handleClick() }
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
