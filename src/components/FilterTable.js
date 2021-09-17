import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterTable() {
  const getContext = useContext(PlanetsContext);

  function handleChangeFilter({ target: { value } }) {
    getContext.handleFilterTable(value);
  }

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar Planeta"
        onChange={ handleChangeFilter }
      />
    </form>
  );
}

export default FilterTable;
