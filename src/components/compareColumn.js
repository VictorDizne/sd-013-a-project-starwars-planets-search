import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const CompareColumn = () => {
  const { filters: { filterByNumericValues: {
    column: coluna,
    comparison: typeCompare,
    value: compareValue,
  },
  },
  // allFilters,
  // setAllfilters,
  /* filters: {
    filterByNumericValues,
  },
  actualFilter,
  setActualFilter,
  setSelectColumns, */
  selectColumns,
  setColuna,
  setTypeCompare,
  setCompareValue,
  handleClick,
  } = useContext(appContext);

  const filtersColumn = ['maior que', 'igual a', 'menor que'];

  /* function handleClick() {
    setActualFilter(actualFilter + 1);
    /* await setAllfilters([...allFilters, filterByNumericValues]); */
  /* const newColu = Object.values(selectColumns).filter((colu) => colu !== coluna);
    setSelectColumns(newColu); */
  //  setAllfilters([...allFilters, filterByNumericValues]);
  // const newColu = Object.values(selectColumns).filter((colu) => colu !== coluna);
  // await setSelectColumns(newColu);
  //  console.log(allFilters);
  //  console.log(coluna);
  //  console.log(filterByNumericValues);
  // }

  return (
    <div>
      <label htmlFor="selectColumn">
        <span>
          Filtrar por coluna
        </span>
        <select
          id="selectColumn"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColuna(value) }
          value={ coluna }
        >
          {selectColumns.map((colum) => (
            <option key={ colum }>
              {colum}
            </option>))}
        </select>
      </label>
      <label htmlFor="filterColum">
        <span>
          Tipo de comparaçao
        </span>
        <select
          id="filterColum"
          data-testid="comparison-filter"
          value={ typeCompare }
          onChange={ ({ target: { value } }) => setTypeCompare(value) }
        >
          {filtersColumn.map((type) => (
            <option key={ type }>
              { type }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="compareValue">
        <span>
          Valor
        </span>
        <input
          type="number"
          data-testid="value-filter"
          value={ compareValue }
          onChange={ (e) => setCompareValue(e.target.value) }
        />
      </label>
      <button type="submit" data-testid="button-filter" onClick={ () => handleClick() }>
        Filtrar
      </button>
    </div>
  );
};

export default CompareColumn;
