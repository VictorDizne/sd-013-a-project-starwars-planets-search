import React, { useContext, useState } from 'react';
import apiContext from '../contexts/apiContext';

function Filters() {
  const { setFilters,
    filters, setAtt, setFiltering, data, loaded } = useContext(apiContext);
  const [filtersInUse, setFiltersInUse] = useState([]);
  const [arrOptionFilter, setArrOptionFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filterByNumbers, setFilterByNumbers] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
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
    setAtt(true);
  };

  const removeFilter = ({ target }) => {
    setArrOptionFilter([...arrOptionFilter, target.value]);

    filtersInUse.splice(filtersInUse.indexOf(target.value), 1);
    setFiltersInUse(filtersInUse);

    const filtered = filters
      .filterByNumericValues.filter(({ column }) => column !== target.value);
    const filterByNumericValues = [...filtered];
    setFilters({ ...filters, filterByNumericValues });

    setAtt(true);
    setFiltering(true);
  };

  const radioFilter = (value) => {
    setOrder({
      column: order.column,
      sort: value,
    });
  };

  const submitOrder = () => {
    setFilters({
      ...filters,
      order,
    });
    setAtt(true);
  };

  return (
    <div>
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
        <div>
          <select
            data-testid="column-sort"
            onChange={ ({ target }) => setOrder({
              column: target.value,
              sort: order.sort,
            }) }
          >
            {loaded && Object.keys(data[0]).map((item) => (
              <option value={ item } key={ item }>
                { item }
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            id="ASC"
            value="ASC"
            name="sort-order"
            data-testid="column-sort-input-asc"
            onChange={ ({ target }) => radioFilter(target.value) }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            name="sort-order"
            onChange={ ({ target }) => radioFilter(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => submitOrder() }
        >
          ordenar
        </button>
      </div>
      <div>
        {filtersInUse.map((item, i) => (
          <div key={ i } data-testid="filter">
            <p>{item}</p>
            <button
              type="button"
              onClick={ removeFilter }
              value={ item }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
