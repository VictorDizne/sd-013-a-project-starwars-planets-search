import React, { useContext } from 'react';
import planetsContext from '../contextAPI';

function FilterForm() {
  const { filters: { filterByName: { name } } } = useContext(planetsContext);
  const {
    columnOptions,
    functions: {
      handleChangePlanetInput,
      handleChangeActualNumericFilter,
      handleClickNumericFilter,
      handleChangeOrder,
    },
  } = useContext(planetsContext);
  const {
    actualNumericFilter: { column, comparison, value },
  } = useContext(planetsContext);

  return (
    <form action="">
      <label htmlFor="name-filter">
        <input
          type="text"
          value={ name }
          onChange={ handleChangePlanetInput }
          data-testid="name-filter"
          placeholder="Nome do planeta"
        />
      </label>
      <label htmlFor="column-filter">
        <select
          value={ column }
          data-testid="column-filter"
          name="column"
          onChange={ handleChangeActualNumericFilter }
        >
          {columnOptions.map((option) => (
            <option key={ option } value={ option }>{option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          value={ comparison }
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChangeActualNumericFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="text"
          value={ value }
          onChange={ handleChangeActualNumericFilter }
          data-testid="value-filter"
          placeholder="valor"
          name="value"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickNumericFilter }
      >
        Filtrar
      </button>
      <label htmlFor="order">
        <select
          name="order"
          id="order"
          onChange={ handleChangeOrder }
          data-testid="column-sort"
        >
          <option value="name">name</option>
          {columnOptions.map((option) => (
            <option key={ option } value={ option }>{option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        <input
          type="radio"
          value="ASC"
          id="asc"
          name="sort"
          onChange={ handleChangeOrder }
          data-testid="column-sort-input-asc"
          defaultChecked
        />
        Ascendent
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          value="DESC"
          id="desc"
          name="sort"
          data-testid="column-sort-input-desc"
          onChange={ handleChangeOrder }
        />
        Descendent
      </label>
      <button
        type="button"
        style={ { display: 'none' } }
        data-testid="column-sort-button"
      >
        Ativar
      </button>
    </form>
  );
}

export default FilterForm;
