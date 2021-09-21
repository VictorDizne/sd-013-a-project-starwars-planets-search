import React, { useContext, useState, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';
import Input from './Input';
import Select from './Select';
import useFilters from '../hooks/useFilters';

// L8: set's que vão 'setar' o valor da busca e os filtros
function Header() {
  const { numFilters, setQueryValue, setNumFilters } = useContext(planetsContext);
  const [handleFilter] = useFilters();
  const initialFilters = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const [inputValue, setInputValues] = useState(initialFilters);

  const columnFilters = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const comparisonFilters = ['maior que', 'igual a', 'menor que'];

  const handleFilterChange = (({ target: { name, value } }) => {
    setInputValues({ ...inputValue, [name]: value }); // Change inputs/Selects
    setNumFilters({ ...numFilters, [name]: value }); // Change column, comparison and value.
  });

  function handleClick() {
    handleFilter(); // Roda a func, verificando se o caso é < > || ===
  }

  useEffect(() => {
    setNumFilters(inputValue);
  }, [inputValue, setNumFilters]);

  function handleSubmit(event) {
    event.preventDefault(); // Cancela reload no submit do button
    const columnFilter = document.getElementById(columnFilters[0]);
    const comparisonFilter = document.getElementById(comparisonFilters[0]);

    setInputValues(initialFilters);
    columnFilter.selected = true;
    comparisonFilter.selected = true;
  // Selecionei os dois selects no doc e coloquei os primeiros valores deles como default selected
  }

  return (
    <header>
      <form onSubmit={ handleSubmit }>
        <Input
          type="Text"
          name="planet-Input"
          testid="name-filter"
          labelText="Nome: "
          onChange={ ({ target: { value } }) => setQueryValue(value) }
          holder="Planeta..."
        />
        <Select
          name="column"
          testid="column-filter"
          labelText="Filtro: "
          options={ columnFilters }
          onChange={ handleFilterChange }
        />
        <Select
          name="comparison"
          testid="comparison-filter"
          labelText="Comparação: "
          options={ comparisonFilters }
          onChange={ handleFilterChange }
        />
        <Input
          type="number"
          name="value"
          testid="value-filter"
          labelText="Valor: "
          value={ inputValue.value }
          onChange={ handleFilterChange }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar
        </button>
      </form>
    </header>
  );
}

export default Header;
