import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filter = () => {
  const { isFetching, setFilter, filter, options,
    setOptions } = useContext(PlanetsContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleOnChange = ({ target }) => {
    setName(target.value);
  };

  const handleBtnClick = () => {
    setFilter({ ...filter,
      filterByNumericValues: [...filter.filterByNumericValues,
        { column, comparison, value }] });
    const index = options.indexOf(column);
    setOptions([...options.slice(0, index), ...options.slice(index + 1, options.length)]);
  };

  const setFiltro = () => {
    setFilter({ ...filter, filterByName: { name } });
  };

  useEffect(setFiltro, [name]);

  return (
    <div className="filters">
      <label htmlFor="text-filter">
        Filtrar:
        <input
          id="text-filter"
          onChange={ handleOnChange }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column-filter">
        Filtrar por coluna:
        <select
          id="column-filter"
          data-testid="column-filter"
          name="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          value={ column }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
        <select
          id="comparison-filter"
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          id="value-filter"
          name="value-filter"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
          value={ value }
          type="number"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleBtnClick }
      >
        Filtrar
      </button>
      {isFetching && <h2>Loading...</h2>}
    </div>
  );
};

export default Filter;
