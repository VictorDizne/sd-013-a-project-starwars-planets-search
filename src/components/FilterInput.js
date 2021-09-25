import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterInput() {
  const { setName, setColumn, setComparison, setValue } = useContext(Context);

 function filterInputs() {
  return (
    <label htmlFor="name">
      <input
        type="text"
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
  );
 }

 return (
   <div>
     { filterInputs() }
     <form>
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            name="column"
            id="column"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            name="value"
            id="value"
            type="number"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
        <button type="button" data-testid="button-filter">Filtrar</button>
      </form>
   </div>
 );
}

export default FilterInput;
