import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Filters({ dispatch, filters }) {
  const dispatchName = ({ target: { name, value } }) => {
    dispatch({
      type: name,
      payload: value,
    });
  };

  const dispatchNumericFilter = (payload) => {
    dispatch({ type: 'numeric-value', payload });
  };

  const createColumnOptions = () => {
    const optionsArray = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const selectedColumns = filters.filterByNumericValues.reduce(
      (prev, curr) => prev.concat(curr.column),
      [],
    );
    return optionsArray
      .filter((option) => !selectedColumns.includes(option))
      .map((option, index) => (
        index === 0
          ? <option key={ index } value={ option } selected>{option}</option>
          : <option key={ index } value={ option }>{option}</option>
      ));
  };

  const [numericValueFilter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '1000',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...numericValueFilter,
      [name]: value,
    });
  };

  const { value } = numericValueFilter;

  return (
    <>
      <input
        type="text"
        onChange={ dispatchName }
        placeholder="Ex.: Naboo"
        name="name"
        data-testid="name-filter"
      />
      <select
        name="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
      >
        {createColumnOptions()}
      </select>
      <select
        name="comparison"
        onChange={ (e) => handleChange(e) }
        data-testid="comparison-filter"
      >
        <option value="maior que" selected>maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        value={ value }
        data-testid="value-filter"
        onChange={ (e) => handleChange(e) }
      />
      <button
        type="button"
        onClick={ () => dispatchNumericFilter(numericValueFilter) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </>
  );
}

Filters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    filterByName: PropTypes.objectOf(PropTypes.string),
    filterByNumericValue: PropTypes.arrayOf(PropTypes.object),
    order: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
