import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

const InputFilterByName = () => {
  const {
    setFilter,
    filter: { filters: { filterByName: { name } } },
  } = useContext(PlanetContext);

  const handleOnChange = ({ target: { value } }) => {
    setFilter({ filters: { filterByName: { name: value } } });
  };

  return (
    <>
      <input
        className="header-input-search"
        type="text"
        data-testid="name-filter"
        onChange={ handleOnChange }
        value={ name }
      />
      🔍
    </>
  );
};
export default InputFilterByName;
