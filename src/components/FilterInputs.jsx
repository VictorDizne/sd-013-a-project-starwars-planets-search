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
  const { filterByNumericValues } = filters;

  function handleChager({ target }) {
    const { value, name, id } = target;
    switch (id) {
    case 'column':
      setNewState(
        { ...newState, column: value },
      );
      // console.log(newState);
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
    default:
      break;
    }
    switch (name) {
    case 'name':
      setFilters({ ...filters, filterByName: { name: value } });
      break;
    case 'acionar filtros':
      setActFilter(true);
      setFilters({ ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          newState,
        ],
      });
      console.log(filters);

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
    </div>
  );
}

export default FilterInputs;
