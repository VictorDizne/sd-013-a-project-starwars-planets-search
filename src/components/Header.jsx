import React, { useContext, useState } from 'react';
import useFilters from '../hooks/useFilters';
import MyContext from '../context/MyContext';
import { Input, Select } from '.';

function Header() {
  const { setQueryValue, setNumFilters } = useContext(MyContext);
  const [handleFilter] = useFilters();
  const INITIAL_INPUT_VALUE = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUE);

  const columnFilters = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonFilters = ['maior que', 'igual a', 'menor que'];

  const handleFilterChange = ({ target: { name, value } }) => (
    setInputValues({ ...inputValues, [name]: value })
  );

  const handleClick = () => {
    setNumFilters(inputValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleFilter();
    const columnFilter = document.getElementById(columnFilters[0]);
    const comparisonFilter = document.getElementById(comparisonFilters[0]);

    setInputValues(INITIAL_INPUT_VALUE);
    columnFilter.selected = true;
    comparisonFilter.selected = true;
  };

  return (
    <header className="header-container">
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
    </header>
  );
}

export default Header;
