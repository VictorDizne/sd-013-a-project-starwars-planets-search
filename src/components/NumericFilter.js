import React, { useContext } from 'react';
import Context from './mycontext';

const NumericFilter = () => {
  const { filters:
      { filterByNumericValues:
        { column,
          changeColumnNumericFilter,
          comparison,
          changeComparisonNumericFilter,
          value,
          changeNumericFilter,
        },
      },
  } = useContext(Context);
  const { filters: { columnNumericFilters, changeNumericFilters } } = useContext(Context);
  const { activateFilter, handleFilterActicvate } = useContext(Context);

  async function handleClick() {
    await handleFilterActicvate(activateFilter + 1);
    const newFilters = Object.values(columnNumericFilters)
      .filter((fltr) => fltr !== column);
    changeNumericFilters(newFilters);
    changeColumnNumericFilter(columnNumericFilters[0]);
  }

  return (
    <div>
      <label htmlFor="column-input" className="input-group mb-3">
        <span className="input-group-text">
          Insira a coluna que você deseja filtrar por
        </span>
        <select
          value={ column }
          className="form-select"
          data-testid="column-filter"
          onChange={ (e) => changeColumnNumericFilter(e.target.value) }
        >
          {Object.values(columnNumericFilters)
            .map((filterOption) => <option key={ filterOption }>{filterOption}</option>)}
        </select>
      </label>
      <label htmlFor="comparison-input" className="input-group mb-3">
        <span className="input-group-text">
          Insira o tipo de comparação
        </span>
        <select
          value={ comparison }
          data-testid="comparison-filter"
          className="form-select"
          onChange={ (e) => changeComparisonNumericFilter(e.target.value) }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
      </label>
      <label htmlFor="value-input" className="input-group mb-3">
        <span className="input-group-text">
          Insira o tipo de comparação
        </span>
        <input
          type="number"
          value={ value }
          className="form-control"
          data-testid="value-filter"
          onChange={ (e) => changeNumericFilter(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
        className="btn btn-primary"
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
