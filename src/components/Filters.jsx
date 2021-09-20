import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import usePlanets from '../hooks/usePlanets';

function Filters() {
  const {
    allFilters,
    setPlanets,
    setAllFilters,
  } = useContext(MyContext);

  const { planets } = usePlanets();

  const handleClick = (filterColumn) => {
    const setFilters = allFilters.filter((filter) => filter.column !== filterColumn);
    setAllFilters(setFilters);
  };

  useEffect(() => {
    if (allFilters.length === 0) setPlanets(planets);
  }, [allFilters, planets, setPlanets]);

  const renderFilters = () => {
    const filters = allFilters.map((filter, index) => (
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
    return filters;
  };
  return (
    <div>
      <h3>Filtros aplicados:</h3>
      { renderFilters() }
    </div>
  );
}

export default Filters;
