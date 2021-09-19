import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { numFilters, setNumFilters } = useContext(MyContext);

  const handleClick = (column) => {
    const numFilter = numFilters.filter((filter) => filter.column !== column);
    setNumFilters(numFilter);
  };

  const renderFilters = () => {
    [numFilters].map((filter, index) => (
      <div key={ index } data-testid="filter">
        <p>{`Coluna: ${filter.column}`}</p>
        <p>{`Comparação: ${filter.comparison}`}</p>
        <p>{`Valor: ${filter.value}`}</p>
        <button
          type="button"
          onClick={ () => handleClick(filter.column) }
        >
          X
        </button>
      </div>
    ));
  };
  return (
    <div>
      <h3>Filtros aplicados:</h3>
      { numFilters.length > 0 ? renderFilters : <h3>Ainda não há filtros</h3> }
    </div>
  );
}

export default Filters;
