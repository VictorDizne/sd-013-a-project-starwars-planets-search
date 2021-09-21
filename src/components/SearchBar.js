import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { inputName, handleName } = useContext(PlanetContext);
  const foguete = '\u{1F680}';

  return (
    <div>
      <span className="foguete">{ foguete }</span>
      <form>
        <label htmlFor="name">
          Nome do Planeta:
          {' '}
          <input
            type="text"
            data-testid="name-filter"
            name="name"
            value={ inputName }
            onChange={ handleName }
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
