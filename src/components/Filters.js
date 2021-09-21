import React, { useContext } from 'react';
import StarWarsContext from '../context';

const Filters = () => {
  const contextValue = useContext(StarWarsContext);
  const { filters: { filterByName: { name } }, handleInput } = contextValue;
  const { data: { results }, setFiltered } = contextValue;
  const { column, value, comparision, setColumn, setValue,
    setComparision, handleOnClick } = contextValue;

  // Funcao para filtrar os filtros selecionados
  const selectedFilter = () => {
    const newArray = [];
    switch (comparision) {
    case 'maior que':
      results.filter((result) => Number(result[column]) > Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    case 'menor que':
      results.filter((result) => Number(result[column]) < Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    case 'igual a':
      results.filter((result) => Number(result[column]) === Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    default:
      return results;
    }
  };

  return (
    <main>
      <label htmlFor="name">
        {' '}
        Filtre por palavra:
        <input
          id="name"
          value={ name }
          data-testid="name-filter"
          onChange={ (e) => handleInput(e.target.value) }
        />
      </label>
      <div>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            value={ column }
            data-testid="column-filter"
            onChange={ (e) => setColumn(e.target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparision">
          <select
            name="comparision"
            id="comparision"
            value={ comparision }
            data-testid="comparison-filter"
            onChange={ (e) => setComparision(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            type="number"
            name="value"
            onChange={ (e) => setValue(e.target.value) }
            value={ value }
            id="value"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleOnClick(selectedFilter) }
        >
          Adicionar filtro
        </button>
      </div>
    </main>

  );
};

export default Filters;
