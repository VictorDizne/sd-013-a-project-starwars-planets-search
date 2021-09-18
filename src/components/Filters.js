import React, { useContext, useState } from 'react';
import Context from '../context/Context';

const Filters = () => {
  const [stateFilterNumber, setState] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const { setFilterText, setFilterNumber, setColumn, setComparison,
    optionsColumn, optionsComparison } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setFilterText(value);
  };

  const handleChangeNumber = ({ target: { value, name } }) => {
    setState({ ...stateFilterNumber, [name]: value });
  };

  const disableOption = () => {
    const { column, comparison } = stateFilterNumber;
    setFilterNumber(stateFilterNumber);
    setColumn(optionsColumn.filter((columnOption) => columnOption !== column));
    setComparison(optionsComparison
      .filter((comparisonOption) => comparisonOption !== comparison));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtre pelo nome"
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        name="column"
        id="column"
        onChange={ handleChangeNumber }
      >
        { optionsColumn
          .map((column, index) => <option key={ index }>{column}</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        onChange={ handleChangeNumber }
      >
        { optionsComparison
          .map((comparison, index) => <option key={ index }>{comparison}</option>) }
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChangeNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => disableOption() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
