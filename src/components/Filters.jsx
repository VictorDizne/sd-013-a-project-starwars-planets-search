import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

function Filters() {
  const [search, setsearch] = useState('');
  const [type, setType] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [number, setNumber] = useState('0');
  const { setFilters } = useContext(StarWarsContext);
  const [columns, setcolumns] = useState(['population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water']);

  const handleChange = (input) => {
    const { target: { value } } = input;
    setsearch(value);
    setFilters((prev) => ({
      ...prev,
      filterByName: {
        name: value,
      },
    }));
    return search;
  };

  const handleClick = () => {
    columns.forEach((option, index) => {
      if (option === type) {
        columns.splice(index, 1);
        setcolumns(columns);
      }
    });
    setFilters((prev) => ({
      ...prev,
      filterByNumericValues: {
        number,
        operator,
        type,
      },
    }));
  };

  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <div>
        <label htmlFor="type-search">
          <select
            name="type-search"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setType(value) }
          >
            {columns.map((c) => <option key={ c } value={ c }>{c}</option>)}
          </select>
        </label>
        <label htmlFor="type-compare">
          <select
            name="type-compare"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setOperator(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="number-input">
          <input
            type="number"
            name="number-input"
            data-testid="value-filter"
            defaultValue="0"
            onChange={ ({ target: { value } }) => setNumber(value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Filters;
