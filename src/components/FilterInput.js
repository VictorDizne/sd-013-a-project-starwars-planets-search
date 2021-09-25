import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function FilterInput() {
  const { setFilter } = useContext(Context);
  const [name, setName] = useState('');
  const newFilter = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  };

  const handleFilter = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    setFilter(newFilter);
  };

  return (
    <label htmlFor="name">
      <input
        type="text"
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ handleFilter }
      />
    </label>
  );
}

export default FilterInput;
