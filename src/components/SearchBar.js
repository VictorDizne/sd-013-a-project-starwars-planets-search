import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

const SearchBar = () => {
  const { filter, setFilter } = useContext(MyContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [columnOrd, setColumnOrd] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [columnArray, setColumnArray] = useState('');
  const [orderRadio, setOrderRadio] = useState('ASC');

  useEffect(() => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  }, [name, setFilter]);

  useEffect(() => {
    if (filter.filters.filterByNumericValues.length > 0) {
      setColumnArray(JSON.stringify(filter.filters.filterByNumericValues));
    }
  }, [filter.filters.filterByNumericValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrayFilters = filter.filters.filterByNumericValues;
    const newObject = [{
      column,
      comparison,
      value,
    }];
    setFilter({ filters: {
      ...filter.filters,
      filterByNumericValues: arrayFilters.concat(newObject),
    } });
  };

  const handleSubmitOrd = (e) => {
    e.preventDefault();
    setFilter({ filters: {
      ...filter.filters,
      order: {
        column: columnOrd,
        sort: orderRadio,
      },
    } });
  };

  return (
    <div>
      <form>
        <input
          placeholder="filtrar por nome"
          type="text"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target }) => setName(target.value) }
        />
      </form>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <select
          data-testid="column-filter"
          name="column-filter"
          id="column-filter"
          value={ column }
          onChange={ ({ target }) => { setColumn(target.value); } }
        >
          { !columnArray.includes('population')
            && <option value="population">population</option> }
          { !columnArray.includes('orbital_period')
            && <option value="orbital_period">orbital_period</option> }
          { !columnArray.includes('diameter')
            && <option value="diameter">diameter</option> }
          { !columnArray.includes('rotation_period')
            && <option value="rotation_period">rotation_period</option> }
          { !columnArray.includes('surface_water')
            && <option value="surface_water">surface_water</option> }
        </select>
        <select
          id="comparison-filter"
          value={ comparison }
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target }) => { setComparison(target.value); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="text"
          value={ value }
          id="value-filter"
          name="value-filter"
          placeholder="valor numérico"
          data-testid="value-filter"
          onChange={ ({ target }) => { setValue(target.value); } }
        />
        <button
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </form>
      <form onSubmit={ (e) => handleSubmitOrd(e) }>
        <select
          id="column-sort"
          data-testid="column-sort"
          name="column-sort"
          value={ columnOrd }
          onChange={ ({ target }) => { setColumnOrd(target.value); } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <label htmlFor="asc">
          <input
            data-testid="column-sort-input-asc"
            name="order_radio"
            type="radio"
            id="asc"
            defaultChecked
            value="ASC"
            onClick={ () => { setOrderRadio('ASC'); } }
          />
          ASC
        </label>
        <label htmlFor="desc">
          <input
            data-testid="column-sort-input-desc"
            id="desc"
            value="DESC"
            name="order_radio"
            type="radio"
            onClick={ () => { setOrderRadio('DESC'); } }
          />
          DESC
        </label>
        <button
          data-testid="column-sort-button"
          type="submit"
        >
          Sort
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
