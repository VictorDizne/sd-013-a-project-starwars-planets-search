import React, { useContext } from 'react';
import Context from '../Context/Context';

function Input() {
  const {
    filter,
    filter: { filters: { filterByName: { name } } },
    setFilter,
  } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    const lowerCaseValue = value.toLowerCase();
    setFilter({ ...filter, filters: { filterByName: { name: lowerCaseValue } } });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      id="name"
      value={ name }
      onChange={ (e) => handleChange(e) }
    />
  );
}

export default Input;
