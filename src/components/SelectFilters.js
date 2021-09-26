import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';

function SelectFilters() {
  const { filterNumeric,
    setFilterNumeric,
    columns,
    setColumns } = useContext(DataContext);
  const [filterSelect, SetfilterSelect] = useState({});

  const handleFilter = ({ target }) => {
    const { value, name } = target;
    SetfilterSelect({ ...filterSelect, [name]: value });
  };

  const handleClick = () => {
    setFilterNumeric([...filterNumeric, filterSelect]);
  };

  useEffect(() => {
    filterNumeric.forEach((item) => {
      setColumns(() => columns.filter((column) => column !== item.column));
    });
  }, [filterNumeric]);

  return (
    <div>
      <label htmlFor="filter-column">
        Columns
        <select
          name="column"
          id="filter-column"
          data-testid="column-filter"
          onChange={ handleFilter }
        >
          { columns.map((filter, index) => <option key={ index }>{ filter }</option>)}
        </select>
      </label>
      <label htmlFor="filter-comparison">
        Comparison
        <select
          name="comparison"
          id="filter-comparison"
          data-testid="comparison-filter"
          onChange={ handleFilter }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="filter-value">
        Value
        <input
          name="value"
          type="number"
          id="filter-value"
          data-testid="value-filter"
          onChange={ handleFilter }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectFilters;
