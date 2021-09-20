import React, { useState, useContext } from 'react';
import myContext from '../context';

function NumericFilter() {
  const { handleClickNumeric } = useContext(myContext);
  // STATE COMPONENT
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  // STATE COMPONENT

  // FUNCTION SET STATE COMPONENT
  const handleChange = ({ target }) => {
    if (target.name === 'Column') setColumn(target.value);
    if (target.name === 'Comparison') setComparison(target.value);
    if (target.name === 'Value') setValue(target.value);
  };
  // FUNCTION SET STATE COMPONENT

  // INITIAL OPTIONS FOR MAP FILTERS
  const allOptionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const allOptionscomparison = [
    'maior que',
    'menor que',
    'igual a',
  ];
  // INITIAL OPTIONS FOR MAP FILTERS

  const onClick = () => {
    handleClickNumeric(column, comparison, value);
  };
  return (
    <div>
      <label htmlFor="Column">
        Column:
        <select
          name="Column"
          data-testid="column-filter"
          value={ column }
          onChange={ handleChange }
        >
          {allOptionsColumn.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="Comparison">
        Comparison:
        <select
          name="Comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ handleChange }
        >
          {allOptionscomparison.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="Value">
        Value:
        <input
          name="Value"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
