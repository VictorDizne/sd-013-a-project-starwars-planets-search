import React, { useState, useContext } from 'react';
import Context from '../../context/index';

function NumericValues() {
  const [numericsValue, setNumericValues] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleNumerics = ({ target }) => {
    const { name, value } = target;
    setNumericValues({
      ...numericsValue,
      [name]: value,
    });
  };

  const { optionColumn, handleFiltersNumeric, optionComparison } = useContext(Context);

  return (
    <>
      <select data-testid="column-filter" name="column" onChange={ handleNumerics }>
        <option>Escolha uma categoria</option>
        { optionColumn
          .map((option) => (<option key={ option }>{ option }</option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleNumerics }
      >
        { optionComparison.map((option) => (
          <option key={ option }>{ option }</option>)) }
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleNumerics }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFiltersNumeric(numericsValue) }
      >
        Buscar
      </button>
    </>
  );
}

export default NumericValues;
