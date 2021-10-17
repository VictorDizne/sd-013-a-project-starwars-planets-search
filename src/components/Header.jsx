import React, { useContext, useState, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';
import Input from './Input';
import Select from './Select';
import Filters from './Filters';
import useFilters from '../hooks/useFilters';
import useColumnFilter from '../hooks/useColumnFilter';

function Header() {
  const {
    setQueryValue,
    setNumFilters,
    numFilters,
    allFilters,
    setAllFilters,
  } = useContext(planetsContext);

  const [handleFilter] = useFilters();
  const [handleSort] = useColumnFilter();

  // Filtros quantitativos
  const initialFilters = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  const [columnFilters, setColumnFilters] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const comparisonFilters = ['maior que', 'igual a', 'menor que'];
  const [inputValue, setInputValues] = useState(initialFilters);

  // Funções de filtragem quantitativa
  const handleFilterChange = (({ target: { name, value } }) => {
    setInputValues({ ...inputValue, [name]: value }); // Change inputs/Selects
  });

  function handleClick() {
    handleFilter(); // Roda a func, verificando se o caso é < > || ===
    const filterColumn = columnFilters.filter((column) => column !== inputValue.column);
    setColumnFilters(filterColumn);
    setAllFilters([...allFilters, numFilters]);
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

  // Filtros Ordenativos
  const initialSort = {
    column: 'name',
    sort: 'ASC',
  };
  const sortFilters = ['name', 'population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [checkedBox, setCheckedBox] = useState([true, false]);
  const [sortValues, setInitialSort] = useState(initialSort);

  // Funções de filtragem ordenativa
  const handleSortChange = (({ target: { name, value } }) => {
    setInitialSort({ ...sortValues, [name]: value });
  });

  const handleCheck = (({ target: { value } }) => (
    value === 'DESC' ? setCheckedBox([false, true]) : setCheckedBox([true, false])
  ));

  const handleSortSubmit = (event) => {
    event.preventDefault();
    handleSort();
  };

  return (
    <header>
      <div>
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
      </div>
      <div>
        <aside>
          <form onSubmit={ handleSortSubmit }>
            <Select
              name="column"
              data-testid="column-sort"
              labelText="Filtrar por: "
              options={ sortFilters }
              onChange={ handleSortChange }
            />
            <Input
              type="checkbox"
              name="sort"
              labelText="Crescente"
              value="ASC"
              onChange={ handleSortChange }
              check={ checkedBox[0] }
              click={ handleCheck }
              data-testid="column-sort-input-asc"
            />
            <Input
              type="checkbox"
              name="sort"
              labelText="Decrescente"
              value="DESC"
              onChange={ handleSortChange }
              check={ checkedBox[1] }
              click={ handleCheck }
              data-testid="column-sort-input-desc"
            />
            <button
              type="submit"
              data-testid="column-sort-button"
            >
              Aplicar
            </button>
          </form>
        </aside>
      </div>
      <Filters />
    </header>
  );
}

export default Header;
