import React, { useContext, useState, useEffect } from 'react';
import Context from '../Context/Context';
import '../App.css';

function SearchBar() {
  const {
    handleName,
    selectColumn,
    handleFilter,
    selectFilter,
    byNumericValue,
  } = useContext(Context);

  const [dropDownColumnSelector, setDropDown] = useState(selectColumn);
  const [stateFilter, setStateFilter] = useState(selectFilter);

  useEffect(() => (
    setDropDown(selectColumn
      .filter((el) => el !== selectFilter.column))), [selectColumn, selectFilter.column]);

  const handleChange = ({ target: { id, value } }) => {
    setStateFilter({
      ...stateFilter,
      [id]: value,
    });
  };

  const filterForms = () => (
    <form className="App-search-bar">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="filtre pelo nome"
        onChange={ handleName }
      />
    </form>
  );

  const dropDownColumn = () => (
    <select
      data-testid="column-filter"
      id="column"
      onChange={ handleChange }
      value={ stateFilter.column }
    >
      <option
        value={ selectFilter.column }
        key={ selectFilter.column }
      >
        {selectFilter.column}
      </option>

      {dropDownColumnSelector.map((Column, index) => (
        <option value={ Column } key={ index }>
          { Column }
        </option>))}
    </select>
  );

  const boxNumberInput = () => (
    <input
      type="number"
      id="value"
      data-testid="value-filter"
      placeholder="digite um numero aqui"
      onChange={ handleChange }
    />
  );

  const comparisonFilter = () => (
    <select
      data-testid="comparison-filter"
      value={ stateFilter.comparison }
      onChange={ handleChange }
      id="comparison"
    >
      <option
        value="maior que"
      >
        maior que
      </option>
      <option
        value="menor que"
      >
        menor que
      </option>
      <option
        value="igual a"
      >
        igual a
      </option>
    </select>
  );

  const submitButton = () => (
    <button
      type="button"
      data-testid="button-filter"
      disabled={
        selectFilter.column === stateFilter.column
        && stateFilter.comparison === selectFilter.comparison
        && stateFilter.value === selectFilter.value
      }
      onClick={ () => {
        // adicionar no array de filtros
        byNumericValue(stateFilter);
        // mudar o filtro inicial do context
        handleFilter(stateFilter);
      } }

    >
      submit
    </button>
  );

  return (
    <div>
      {filterForms()}
      {dropDownColumn()}
      {comparisonFilter()}
      {boxNumberInput()}
      {submitButton()}
    </div>
  );
}

export default SearchBar;
