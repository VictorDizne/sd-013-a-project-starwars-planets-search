import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Header() {
  const { setState, state } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setState({
      ...state,
      filters: {
        ...state.filters,
        filterByName: { name: target.value },
      },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Insira um nome"
      onChange={ handleChange }
    />
  );
}

export default Header;
