import React, { useState, useContext } from 'react';
import StarWarsContext from '../context';

const FilterColumns = () => {
  const [arrColumns, setArrColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const arrComparisonFilters = ['maior que', 'menor que', 'igual a'];

  const { filterByNumerics, state, resetData } = useContext(StarWarsContext);
  const { filters: { filterByNumericValues } } = state;

  const handleClickFilter = (strColumns) => {
    setArrColumns([...arrColumns, strColumns]);

    const arrFilterByNumericValuesUpdated = filterByNumericValues
      .filter(({ column }) => column !== strColumns);

    console.log('Filtrou o array', arrFilterByNumericValuesUpdated);

    resetData(arrFilterByNumericValuesUpdated);
  };

  const displayFilters = () => (
    filterByNumericValues.map((filter) => {
      const { column, comparison, value } = filter;
      return (
        <div id={ column } key={ column }>
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            data-testid="column"
            onClick={ () => handleClickFilter(column) }
            type="button"
          >
            x
          </button>
        </div>
      );
    })

  );

  const handleClick = () => {
    const selectFromColumns = document.getElementById('selectForColumns');
    const optionFromColumns = selectFromColumns.options[
      selectFromColumns.selectedIndex
    ].value;

    const selectFromComparison = document.getElementById('selectForComparison');
    const optionFromComparison = selectFromComparison.options[
      selectFromComparison.selectedIndex
    ].value;

    // Posso chamar uma função que receberá esse valor como param
    const numberFromInput = document.getElementById('numberForFilter').value;

    // Função que encontra-se no provider e é responsável em realizar o filtro no state que lá está declarado
    filterByNumerics(optionFromColumns, optionFromComparison, numberFromInput);
    // Atualização do droplist que contém as colunas (estado local do componente)
    const indexOfSelectedColumns = arrColumns
      .findIndex((item) => item === optionFromColumns);

    const arrColumnsFiltered = [...arrColumns];
    arrColumnsFiltered.splice(indexOfSelectedColumns, 1);

    setArrColumns(arrColumnsFiltered);
  };

  return (
    <div>
      <label htmlFor="select-columns">
        Select column:
        <select data-testid="column-filter" name="select-columns" id="selectForColumns">
          {
            arrColumns.map(
              (column) => <option key={ column } value={ column }>{column}</option>,
            )
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison options:
        <select
          data-testid="comparison-filter"
          id="selectForComparison"
          name="comparison-filter"
        >
          {
            arrComparisonFilters.map(
              (criteria) => (
                <option
                  key={ criteria }
                  value={ criteria }
                >
                  {criteria}
                </option>),
            )
          }
        </select>
      </label>
      <label htmlFor="input-number">
        Input number:
        <input
          data-testid="value-filter"
          id="numberForFilter"
          name="input-number"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        onClick={ handleClick }
        type="button"
      >
        Filter
      </button>
      <div>
        { filterByNumericValues ? displayFilters() : null }
      </div>
    </div>
  );
};

export default FilterColumns;
