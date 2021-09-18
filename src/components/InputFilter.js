import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const InputFilter = () => {
  const { isFetching, handleChange } = useContext(StarWarsContext);

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
          onChange={ handleChange }
        />
      </label>
    </div>

  );
  return (
    !isFetching && inputElement
  );
};

export default InputFilter;
