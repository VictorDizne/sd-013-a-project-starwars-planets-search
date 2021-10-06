import React, { useContext } from 'react';
import SelectColumn from './SelectColumn';
import SelectWidth from './SelectWidth';
import BtnAddFilters from './BtnAddFilters';
import Label from './Label';
import dataContext from '../context/createContext';

function FilterInputs() {
  const {
    setFilters,
    filters,
    setActFilter,
    setNewState,
    newState } = useContext(dataContext);
  const { filterByNumericValues, order } = filters;

  const TOString = (element) => JSON.stringify([
    element.column,
    element.value,
    element.comparison,
  ]);

  const saveFilter = () => {
    if (filterByNumericValues.length === 0) {
      return setFilters({ ...filters,
        filterByNumericValues: [
          newState,
        ],
      });
    }

    const countObjects = filterByNumericValues
      .reduce((acc, act) => {
        if (TOString(newState) === TOString(act)) acc += 1;
        return acc;
      }, 0);

    if (countObjects === 0) {
      setFilters({ ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          newState,
        ],
      });
    }
  };

  function handleChager({ target }) {
    const { value, name, id } = target;
    switch (id) {
    case 'column':
      setNewState(
        { ...newState, column: value },
      );
      break;
    case 'comparison':
      setNewState(
        { ...newState, comparison: value },
      );
      break;
    case 'value-filter':
      setNewState(
        { ...newState, value },
      );
      break;
    case 'column-sort':
      console.log(value);

      setFilters(
        { ...filters, order: { ...order, column: value } },
      );
      break;

    default:
      break;
    }
    switch (name) {
    case 'name':
      setFilters({ ...filters, filterByName: { name: value } });
      break;
    case 'acionar filtros':
      setActFilter(true);
      setNewState({
        ...newState,
      });
      saveFilter();
      break;
    case 'SORT':
      setFilters(
        { ...filters, order: { ...order, sort: value } },
      );
      break;
    default: break;
    }
  }

  return (
    <div>
      <Label onChange={ handleChager } name="name" id="name-filter" type="text" />
      {/* select column filter */}
      <SelectColumn id="column" onChange={ handleChager } />
      {/* select comparison filter */}
      <SelectWidth id="comparison" onChange={ handleChager } />
      {/* label diameter number filter */}
      <Label onChange={ handleChager } name="valueF" id="value-filter" type="number" />
      {/* botão para adicionar filtro */}
      <BtnAddFilters id="button-filter" text="acionar filtros" onClick={ handleChager } />
      <SelectColumn id="column-sort" onChange={ handleChager } />

      <label htmlFor="SORT">
        ASC
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="SORT"
          value="ASC"
          onChange={ handleChager }
        />
        DESC
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="SORT"
          onChange={ handleChager }
          value="DESC"
        />
      </label>
      <button type="button" data-testid="column-sort-button">
        button
      </button>
      <br />
    </div>
  );
}

export default FilterInputs;
