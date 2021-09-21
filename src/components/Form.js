import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import SelectFilters from './SelectFilters';

function Form() {
  const { SetFilterByName } = useContext(DataContext);

  const handleName = ({ target }) => {
    const { value } = target;
    SetFilterByName(value);
  };

  return (
    <div>

      <label htmlFor="filter-name">
        Nome
        <input
          type="text"
          id="filter-name"
          data-testid="name-filter"
          onChange={ handleName }
        />
      </label>
      <SelectFilters />
    </div>
  );
}

export default Form;
