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
  const { filters: { columnNumericFilters } } = useContext(Context);
  const { activateFilter, handleFilterActicvate } = useContext(Context);

  function handleClick() {
    handleFilterActicvate(activateFilter + 1);
    delete columnNumericFilters[column];
  }

  return (
    <div>
      <label htmlFor="column-input">
        Insira a coluna que você deseja filtrar por
        <select
          value={ column }
          data-testid="column-filter"
          onChange={ (e) => changeColumnNumericFilter(e.target.value) }
        >
          {Object.values(columnNumericFilters)
            .map((filterOption) => <option key={ filterOption }>{filterOption}</option>)}
        </select>
      </label>
      <label htmlFor="comparison-input">
        Insira o tipo de comparação
        <select
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ (e) => changeComparisonNumericFilter(e.target.value) }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
      </label>
      <label htmlFor="value-input">
        Insira o valor a ser comparado
        <input
          type="number"
          value={ value }
          data-testid="value-filter"
          onChange={ (e) => changeNumericFilter(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
