import React, { useContext } from 'react';
import MyContext from '../context/Context';

const Filter = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => setName({
    filters: {
      ...name.filters,
      filterByName: {
        name: value,
      } },
  });
  console.log(name);
  return (
    <div>
      <input
        value={ name }
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
};

export default Filter;
