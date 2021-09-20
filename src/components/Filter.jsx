import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import OrderForm from './OrderForm';

const columnField = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisonField = ['', 'maior que', 'menor que', 'igual a'];
const FIVE = 5;

function Filter() {
  const { handleChange, handleClick, filter, deleteClick } = (
    useContext(PlanetsContext)
  );
  const [localFilter, setLocalFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [filters, setFilters] = useState(columnField);

  useEffect(() => {
    const { filterByNumerics } = filter;
    if (!filterByNumerics) {
      return setFilters(columnField);
    }
    if (filterByNumerics.length > 0) {
      const arrayOfFilters = filterByNumerics.map((value) => value.column);
      return setFilters(columnField.filter((v) => !arrayOfFilters.includes(v)));
    }
  }, [filter]);

  const updateFilter = ({ target: { name, value } }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const createFilterArea = () => {
    if (filters.length < FIVE) {
      return (
        <div>
          {
            filter.filterByNumerics.map(({ column, comparison, value }, index) => (
              <div key={ index } data-testid="filter">
                {
                  `${column} ${comparison} ${value}`
                }
                <button
                  type="button"
                  onClick={ () => deleteClick(column) }
                >
                  X
                </button>
              </div>
            ))
          }
        </div>
      );
    }
    return '';
  };

  return (
    <form>
      <label htmlFor="input-name">
        Nome:
        <input
          id="input-name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="column-filter">
        Filtro:
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ updateFilter }
        >
          {
            filters.map((field, i) => <option key={ i }>{ field }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ updateFilter }
        >
          {
            comparisonField.map((field, i) => <option key={ i }>{ field }</option>)
          }
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          name="value"
          id="value-filter"
          data-testid="value-filter"
          onChange={ updateFilter }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(localFilter) }
      >
        Adicionar Filtro
      </button>
      <OrderForm />
      <div>
        {createFilterArea()}
      </div>
    </form>
  );
}

export default Filter;
