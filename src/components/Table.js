import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Th from './Th';
import Tr from './Tr';
import Filters from './Filters';
import {
  handleChange,
  handleSubmit,
  handleClick,
  handleSelectOrder,
  handleSort,
  generalSort } from '../Functions/index';

function Table() {
  const { data, filters, setFilters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues, order } = filters;
  const {
    column,
    comparison,
    value } = filterByNumericValues[filterByNumericValues.length - 1];
  const { columnName, sort } = order;
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  const content = data.length > 0 ? data : [];

  useEffect(() => {
    handleSelectOrder();
  }, [filterByNumericValues]);

  return (
    <>
      <form
        onSubmit={ (e) => handleSubmit(e, filterByNumericValues, setFilters, filters) }
      >
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (e) => handleChange(e, setFilters, filters) }
        />
        <select data-testid="column-filter" id="column">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
      <form onSubmit={ (e) => handleSort(e, setFilters, filters) }>
        <select data-testid="column-sort" id="sort">{}</select>
        <label htmlFor="ASC">
          <input
            type="radio"
            value="ASC"
            id="ASC"
            data-testid="column-sort-input-asc"
            name="sort"
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            value="DESC"
            id="DESC"
            data-testid="column-sort-input-desc"
            name="sort"
          />
          DESC
        </label>
        <button type="submit" data-testid="column-sort-button">
          SORT
        </button>
      </form>
      <ol>
        {filterByNumericValues
          .map((filter, i) => (<Filters
            key={ i }
            filter={ filter }
            handleClick={ handleClick }
          />))}
      </ol>
      <table>
        <thead>
          <tr>{titles.map((title, index) => <Th Key={ index } title={ title } />)}</tr>
        </thead>
        <tbody>
          { content
            .filter((info) => info.name.includes(name))
            .filter((info) => (
              comparison === 'maior que' ? info[column] > Number(value) : info))
            .filter((info) => (
              comparison === 'menor que' ? info[column] < Number(value) : info))
            .filter((info) => (
              comparison === 'igual a' ? info[column] === value : info))
            .sort((a, b) => generalSort(a, b, columnName, sort))
            .map((info, index) => <Tr Key={ index } data={ info } />)}
        </tbody>
      </table>
    </>
  );
}

export default Table;
