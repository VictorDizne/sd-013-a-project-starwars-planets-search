import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const InputFilter = () => {
  const { isFetching, handleInputFilterChange } = useContext(StarWarsContext);

  const inputElement = (
    <div
      className="inputName-container"
    >
      <label
        htmlFor="input-filter"
      >
        <input
          id="input-filter"
          data-testid="name-filter"
          placeholder="filtrar planetas"
          name="input"
          onChange={ handleInputFilterChange }
        />
      </label>
    </div>

  );
  return (
    !isFetching && inputElement
  );
};

export default InputFilter;
