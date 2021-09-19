import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const SearchBar = () => {
  const contexto = useContext(Context);
  const { data, setFilter, filter, setDataFiltered } = contexto;
  const { filterByName: { name } } = filter;

  useEffect(() => {
    const dataFiltered = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    setDataFiltered(dataFiltered);
  }, [filter, data, setDataFiltered, name]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <label htmlFor="name-filter">
      Filter by name:
      <span className="span-space" />
      <input
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
        type="text"
      />
    </label>
  );
};

export default SearchBar;
