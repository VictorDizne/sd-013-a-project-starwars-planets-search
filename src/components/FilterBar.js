import React, { useContext, useState } from 'react';
import MyContext from '../context/Context';
import Input from './Input';
import Select from './Select';
import useFilterNumeric from '../hooks/useFilterNumeric';
import FilterCard from './FilterCard';
import useSort from '../hooks/useSort';

export default function FilterBar() {
  const {
    setFilterName,
    setFilterNumeric,
    filterNumeric,
    filterCard,
    setFilterCard,
    sortFilter,
    setSortFilter,
  } = useContext(MyContext);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const [handleFilter] = useFilterNumeric();

  function searchChange({ target: { value } }) {
    setFilterName(value);
  }

  function handleChange({ target: { value, name } }) {
    setFilterNumeric({
      ...filterNumeric,
      [name]: value,
    });
  }

  function handleClick() {
    handleFilter();
    const filterColumn = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    setOptions(filterColumn.filter((column) => column !== filterNumeric.column));

    setFilterCard([
      ...filterCard,
      {
        column: filterNumeric.column,
        value: filterNumeric.value,
        comparison: filterNumeric.comparison,
      },
    ]);
  }

  // Função para ordenar as colunas como ASC ou DESC

  const [checked, setChecked] = useState([true, false]);

  function handleUpdate({ target: { value, name } }) {
    setSortFilter({
      ...sortFilter,
      [name]: value,
    })
  }

  function alternRadioButton({ target: { value } }) {
    value === 'ASC' ? setChecked([true, false]) : setChecked([false, true]);
  }

  const [handleSort] = useSort();

  function toggleOrdenation(e) {
    e.preventDefault();
    const { sort, column } = sortFilter;
    handleSort(sort, column);
  }

  return (
    <div>
      <div>
        <Input
          type="text"
          onChange={ searchChange }
          test="name-filter"
          name="Search"
        />
        <Select
          options={ options }
          onChange={ handleChange }
          datatest="column-filter"
          name="column"
          labeltext="Column"
        />
        <Select
          options={ ['maior que', 'igual a', 'menor que'] }
          onChange={ handleChange }
          datatest="comparison-filter"
          name="comparison"
          labeltext="Comparison"
        />
        <Input
          type="number"
          onChange={ handleChange }
          test="value-filter"
          name="value"
          labeltext="Value"
        />
        <button
          data-testid="button-filter"
          onClick={ handleClick }
          type="button"
        >
          Filtrar
        </button>
        {filterCard.map((card, index) => (
          <FilterCard
            key={ index }
            comparison={ card.comparison }
            value={ card.value }
            column={ card.column }
          />
        ))}
      </div>
      <div>
        <Select
          options={ options }
          onChange={ handleUpdate }
          datatest="column-sort"
          name="column"
          labeltext="Column"
        />
        <Input
          type="radio"
          onChange={ handleUpdate }
          onClick={ alternRadioButton }
          test="column-sort-input-asc"
          name="sort"
          value="ASC"
          labeltext="ASC"
          checked={ checked[0] }
        />
        <Input
          type="radio"
          onChange={ handleUpdate }
          onClick={ alternRadioButton }
          test="column-sort-input-desc"
          name="sort"
          value="DESC"
          labeltext="DESC"
          checked={ checked[1] }
        />
        <button
          data-testid="column-sort-button"
          type="submit"
          onClick={ (e) => toggleOrdenation(e) }
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
