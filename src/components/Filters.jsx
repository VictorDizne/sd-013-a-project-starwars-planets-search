import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';
import usePlanets from '../hooks/usePlanets';

function Filters() {
  const { allFilters, setPlanets, setAllFilters } = useContext(planetsContext);

  const { planets } = usePlanets();

  const handleClick = (column) => {
    const setFilters = allFilters.filter((num) => num.column !== column);
    setAllFilters(setFilters);
  };

  useEffect(() => {
    if (allFilters.length === 0) setPlanets(planets);
  }, [allFilters, planets, setPlanets]);

  const renderFilter = () => {
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
      <h3>Filtros Aplicados:</h3>
      { renderFilter() }
    </div>
  );
}

export default Filters;
