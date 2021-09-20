import React, { useState, useContext } from 'react';
import myContext from '../context';

function NumericFilter() {
  const { handleClickNumeric } = useContext(myContext);
  // INITIAL STATES
  const INITIAL_COLUMN = '';
  const INITIAL_COMPARISON = '';
  const INITIAL_VALUE = 0;
  // INITIAL STATES

  // STATE COMPONENT
  const [columnComp, setColumn] = useState(INITIAL_COLUMN);
  const [comparisonComp, setComparison] = useState(INITIAL_COMPARISON);
  const [value, setValue] = useState(INITIAL_VALUE);
  const [comparisonMap, setComparisonMap] = useState(['maior que', 'menor que', 'igual a',
  ]);
  const [columnMap, setColumnMap] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period',
    'surface_water',
  ]);
  // STATE COMPONENT

  // FUNCTION SET STATE COMPONENT
  const handleChange = ({ target }) => {
    if (target.name === 'Column') setColumn(target.value);
    if (target.name === 'Comparison') setComparison(target.value);
    if (target.name === 'Value') setValue(target.value);
  };
  // FUNCTION SET STATE COMPONENT

  // INITIAL OPTIONS FOR MAP FILTERS

  // INITIAL OPTIONS FOR MAP FILTERS
  const setStatesOptions = () => {
    setColumn(INITIAL_COLUMN);
    setComparison(INITIAL_COMPARISON);
    setValue(INITIAL_VALUE);
  };

  const deleteFilter = () => {
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

    setColumnMap(allOptionsColumn.filter((e) => e !== columnComp));
    setComparisonMap(allOptionscomparison.filter((e) => e !== comparisonComp));
  };

  const onClick = () => {
    handleClickNumeric(columnComp, comparisonComp, value);
    deleteFilter();
    setStatesOptions();
  };

  return (
    <div>
      <label htmlFor="Column">
        Column:
        <select
          name="Column"
          data-testid="column-filter"
          value={ columnComp }
          onChange={ handleChange }
        >
          {columnMap.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="Comparison">
        Comparison:
        <select
          name="Comparison"
          data-testid="comparison-filter"
          value={ comparisonComp }
          onChange={ handleChange }
        >
          {comparisonMap.map((option) => (
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
        Filter
      </button>
    </div>
  );
}

export default NumericFilter;
