import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterBtn = () => {
  const { filter, setFilter, options, setOptions } = useContext(PlanetsContext);

  const handleFilterDiv = ({ target }) => {
    const filterDivFilter = filter.filterByNumericValues.filter(
      (f) => f.column !== target.name,
    );
    setFilter({ ...filter, filterByNumericValues: [...filterDivFilter] });
    setOptions([...options, target.name]);
  };

  return filter.filterByNumericValues
    && filter.filterByNumericValues.map((f, i) => (
      <div data-testid="filter" className="filter-div" key={ `${f}${i}` }>
        {`${f.column} ${f.comparison} ${f.value} `}
        <button name={ f.column } type="button" onClick={ handleFilterDiv }>x</button>
      </div>
    ));
};

export default FilterBtn;
