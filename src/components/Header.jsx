import React, { useContext, useState } from 'react';
import usePlanets from '../hooks/usePlanets';
import MyContext from '../context/MyContext';
import { Input, Select } from '.';

function Header() {
  const { setQueryValue, setNumFilters } = useContext(MyContext);
  const { planetsKeys } = usePlanets();
  const INITIAL_INPUT_VALUE = {
    column: 'name',
    comparison: 'maior que',
    value: 0,
  };
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUE);

  const comparisonFilters = ['maior que', 'menor que', 'igual a'];

  const handleFilterChange = ({ target: { name, value } }) => (
    setInputValues({ ...inputValues, [name]: value })
  );

  const handleClick = () => {
    setNumFilters(inputValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const columnFilter = document.getElementById(planetsKeys[0]);
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
          options={ planetsKeys }
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
