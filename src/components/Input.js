import React, { useContext, useState } from 'react';
import Context from '../context/Context';

// feito com ajuda de Gustavo Moraes, Luiz Casimiro

const handleChange = (e, setFilters) => {
  e.persist();
  setFilters((state) => ({
    ...state, filterByName: { name: e.target.value },
  }));
};

const deleteColumnFilter = (column, setColumnFilter) => {
  setColumnFilter((state) => state.filter((columnItem) => columnItem !== column));
};

const handleFilters = (setFilters, setColumnFilter) => {
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, {
      value, column, comparison,
    }],
  }));

  deleteColumnFilter(column, setColumnFilter);
};

const Input = () => {
  const { data, filters, setFilters } = useContext(Context);
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  return (
    <div>

      <div>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-filter"
            id="name"
            name="name"
            onChange={ (e) => handleChange(e, setFilters) }
            type="text"
            value={ filters.filterByName.name }
          />
        </label>
      </div>

      <div>
        <label htmlFor="column">
          Filtrar por
          <select
            data-testid="column-filter"
            id="column"
            name="column"
          >
            {columnFilter.map((item) => (
              <option key={ item } value={ item }>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="comparison">
          Tipo de comparação
          <select
            id="comparison"
            name="comparison"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="value">
          Número para comparar
          <input
            data-testid="value-filter"
            id="value"
            name="value"
            type="text"
          />
        </label>
      </div>
      <button
        data-testid="button-filter"
        onClick={ () => handleFilters(setFilters, setColumnFilter) }
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
};

export default Input;
