import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Form() {
  const { SetFilterByName } = useContext(DataContext);

  const handleName = ({ target }) => {
    const { value } = target;
    SetFilterByName(value);
  };

  return (
    <label htmlFor="filter-name">
      Nome
      <input
        type="text"
        id="filter-name"
        data-testid="name-filter"
        onChange={ handleName }
      />
    </label>
  );
}

export default Form;
