import React, { useState, useContext } from 'react';
import planetContext from '../context';

const FilterValues = () => {
  const [filterSelect, setFilterSelect] = useState({});
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const { filter, setFilter } = useContext(planetContext);

  const handleFilter = ({ target: { value, name } }) => {
    setFilterSelect({
      ...filterSelect,
      [name]: value,
    });
  };

  const removeOptions = () => {
    const columnOpt = columns.filter((column) => column !== filterSelect.column);
    setColumns(columnOpt);
  };

  const handleClick = () => {
    setFilter([
      ...filter,
      filterSelect,
    ]);
    removeOptions();
  };

  function createColumn() {
    return columns
      .map((column, idx) => <option key={ idx } value={ column }>{ column }</option>);
  }

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleFilter }
      >
        { createColumn() }
      </select>
      <select
        name="comparison"
        id=""
        data-testid="comparison-filter"
        onChange={ handleFilter }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        id=""
        onChange={ handleFilter }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterValues;
