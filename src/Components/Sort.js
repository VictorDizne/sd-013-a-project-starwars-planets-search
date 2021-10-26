import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

const options = [
  'name',
  'climate',
  'population',
  'diameter',
  'orbital_period',
  'rotation_period',
  'surface_water',
];

export default function Sort() {
  const { stateFiltered, setStateFiltered } = useContext(myContext);
  const [sortState, setSortState] = useState({ column: 'Name', sort: 'ASC' });

  const handleChange = ({ target: { value, name } }) => {
    setSortState({ ...sortState, [name]: value });
  };

  const handleClick = () => {
    setStateFiltered({
      ...stateFiltered,
      filter: { ...stateFiltered.filter, order: sortState },
    });
  };

  return (
    <div>
      <select name="column" onChange={ handleChange } data-testid="column-sort">
        {options.map((option, i) => <option name="column" key={ i }>{option}</option>)}
      </select>
      <label htmlFor="ASC">
        {' '}
        ASC
        <input
          onChange={ handleChange }
          name="sort"
          value="ASC"
          type="radio"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          onChange={ handleChange }
          name="sort"
          value="DESC"
          type="radio"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ handleClick }
        type="button"
      >
        Ordenar

      </button>
    </div>);
}
