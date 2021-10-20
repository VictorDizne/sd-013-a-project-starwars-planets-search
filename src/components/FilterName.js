import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { setFilter } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <label htmlFor="input">
      <input
        id="input"
        data-testid="name-filter"
        type="text"
        onChange={ (value) => handleChange(value) }
      />
    </label>
  );
}

export default FilterName;
