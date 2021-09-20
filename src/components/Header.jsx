import React, { useContext, useState, useEffect } from 'react';
import useFilters from '../hooks/useFilters';
import MyContext from '../context/MyContext';
import Input from './Input';
import Select from './Select';
import Filters from './Filters';

function Header() {
  const {
    numFilters,
    setQueryValue,
    setNumFilters,
    allFilters,
    setAllFilters,
  } = useContext(MyContext);
  const [handleFilter] = useFilters();
  const INITIAL_INPUT_VALUE = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const initialColumn = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonFilters = ['maior que', 'igual a', 'menor que'];

  const [columnFilters, setColumnFilters] = useState(initialColumn);

  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUE);

  const handleFilterChange = ({ target: { name, value } }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    setNumFilters(inputValues);
  }, [inputValues, setNumFilters]);

  const handleClick = () => {
    handleFilter();
    setColumnFilters(initialColumn);
    const filterColumn = initialColumn.filter((column) => column !== inputValues.column);
    setColumnFilters(filterColumn);
    setAllFilters([...allFilters, numFilters]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const columnFilter = document.getElementById(columnFilters[0]);
    const comparisonFilter = document.getElementById(comparisonFilters[0]);

    columnFilter.selected = true;
    comparisonFilter.selected = true;
  };

  return (
    <header className="header-box">
      <form onSubmit={ handleSubmit }>
        <Input
          type="text"
          name="planet-input"
          testID="name-filter"
          labelText="Nome: "
          onChange={ ({ target: { value } }) => setQueryValue(value) }
        />
        <Select
          name="column"
          testID="column-filter"
          labelText="Filtro: "
          options={ columnFilters }
          onChange={ handleFilterChange }
        />
        <Select
          name="comparison"
          testID="comparison-filter"
          labelText="Comparação: "
          options={ comparisonFilters }
          onChange={ handleFilterChange }
        />
        <Input
          type="number"
          name="value"
          testID="value-filter"
          labelText="Valor: "
          value={ inputValues.value }
          onChange={ handleFilterChange }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar Filtro
        </button>
      </form>
      <Filters />
    </header>
  );
}

export default Header;
