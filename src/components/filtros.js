import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const Filtros = () => {
  const { filters: { filterbyname: { name } },
    filters: { filterbyname },
  } = useContext(appContext);

  return (
    <div>
      <label htmlFor="filterName">
        Filtrar por nome:
        <input
          id="filterName"
          type="text"
          name="name"
          placeholder="Filtrar"
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target }) => filterbyname.setName(target.value) }
        />
      </label>
    </div>
  );
};

export default Filtros;
