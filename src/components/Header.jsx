import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { setQueryValue } = useContext(MyContext);

  return (
    <header className="header-box">
      <input
        type="text"
        name="planet-input"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setQueryValue(value) }
      />
    </header>
  );
}

export default Header;
