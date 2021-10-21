import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { filter, setFilter } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({ ...filter, filterByName: value });
  };

  return (
    <label htmlFor="input">
      <input
        id="input"
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </label>
  );
}

export default FilterName;
