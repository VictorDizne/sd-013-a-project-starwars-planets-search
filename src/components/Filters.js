import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Filters({
  dispatch,
  filters: { filterByNumericValues },
  children,
}) {
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
    const selectedColumns = filterByNumericValues.reduce(
      (prev, curr) => prev.concat(curr.column),
      [],
    );
    return optionsArray
      .filter((option) => !selectedColumns.includes(option))
      .map((option, index) => (
        <option key={ index } value={ option }>{option}</option>
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
        defaultValue="population"
      >
        {createColumnOptions()}
      </select>
      <select
        name="comparison"
        onChange={ (e) => handleChange(e) }
        data-testid="comparison-filter"
        defaultValue="maior que"
      >
        <option value="maior que">maior que</option>
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
      {children}
    </>
  );
}

Filters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    filterByName: PropTypes.objectOf(PropTypes.string),
    filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
    order: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  children: PropTypes.node.isRequired,
};
