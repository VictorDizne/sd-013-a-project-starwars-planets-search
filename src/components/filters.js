import React, { useContext, useState } from 'react';
import apiContext from '../contexts/apiContext';

function Filters() {
  const { setFilters, filters } = useContext(apiContext);
  const [filtersInUse, setFiltersInUse] = useState([]);
  const [arrOptionFilter, setArrOptionFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filterByNumbers, setFilterByNumbers] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChangeSearch = ({ target }) => {
    setFilters({ ...filters,
      filterByName: { name: target.value },
    });
  };

  const handleChangeFilter = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues, {
          ...filterByNumbers,
        }],
    });
    setFiltersInUse([...filtersInUse, filterByNumbers.column]);
    arrOptionFilter
      .splice(arrOptionFilter.indexOf(filterByNumbers.column), 1);
    setArrOptionFilter(arrOptionFilter);
    console.log(arrOptionFilter, 'options');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="busque um planeta"
        data-testid="name-filter"
        onChange={ handleChangeSearch }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterByNumbers({
          ...filterByNumbers,
          column: target.value }) }
      >
        {arrOptionFilter
          .map((item, i) => <option key={ i } value={ item }>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setFilterByNumbers({
          ...filterByNumbers,
          comparison: target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setFilterByNumbers({
          ...filterByNumbers,
          value: target.value }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleChangeFilter }
      >
        filtrar
      </button>
    </div>
  );
}

export default Filters;
