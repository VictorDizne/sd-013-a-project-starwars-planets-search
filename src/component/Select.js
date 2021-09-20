import React, { useState, useContext, useEffect } from 'react';
import StarsContext from '../context/StarContext';

function Select() {
  const optionColumns = ['population', 'orbital_period', 'rotation_period', 'diameter',
    'surface_water'];// options parte column criada de forma dinamica
  const { filters, setFilters } = useContext(StarsContext);// chamando do contexto;
  const { filterByNumericValues } = filters; // descontruindo filterByNumericValue
  const [columnState, setColumnState] = useState(optionColumns); // um estado para as colunas
  const [hiddenStatus, setHiddenStatus] = useState(false);
  const [localFilter, setLocalFilter] = useState({ // filtro local para receber os selects e as mudanças de valores
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  function handleChange(event) {
    setLocalFilter({
      ...localFilter,
      [event.target.name]: event.target.value,
    });
  }

  function changeFilterContext() {
    setFilters({
      ...filters, // para nao perder o nome
      filterByNumericValues: [...filters.filterByNumericValues, localFilter], // alterando a chave filterByNumericValues, depois juntando objeto com o novo objeto que chega.Ex: population maior que 2000, junta com diametro menor que 100.
    });
  }

  // Ajuda da Júlia, e consulta ao pr da Júlia: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/52
  useEffect(() => {
    const columnFilter = filterByNumericValues.map((filterNum) => filterNum.column); // vai vir  columns, comparion e value, eu só quero o column selecionado pela pessoa
    const filterRest = optionColumns.filter((oc) => !columnFilter.includes(oc)); // filtrando as colunas restantes e deixando só elas nas options;
    setColumnState(filterRest);
    console.log(optionColumns, 'columns');
    console.log(filterRest);
  }, [filterByNumericValues]);

  useEffect(() => {
    const columnValue = document.getElementById('column').value;
    setLocalFilter({ // setando valor no filtro local
      ...localFilter,
      column: columnValue, // deixando o valor da option que sobrou porque a handleChange não monitora alterações da column state
    });
    if (columnState.length === 0) {
      setHiddenStatus(true);
    } else {
      setHiddenStatus(false);
    }
  }, [columnState]);

  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      >
        {columnState.map((c, index) => <option key={ index } value={ c }>{c}</option>)}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ changeFilterContext }
      >
        Acionar filtro
      </button>
    </div>
  );
}

export default Select;
