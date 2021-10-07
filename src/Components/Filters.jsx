import React, { useContext, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Filters() {
  const {
    name,
    setName,
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(PlanetsContext);

  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const optionsComparison = ['maior que', 'menor que', 'igual a'];

  // é preciso criar um useState na págiga para que este seja coloca no onChange e o filtro só seja ativado quando setarmos o estado global no click do botão
  const [col, setCol] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [numValue, setNumValue] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do planeta"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <label htmlFor="column-filter">
        Selecione a coluna:
        <select
          name="column-filter"
          value={ col }
          id="column-filter"
          data-testid="column-filter"
          onChange={ ({ target }) => setCol(target.value) }
        >
          {/* lógica de remoção de filtro feita com consulta ao código do Fernando Costa
          Link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/43 */}
          {filterByNumericValues
            .reduce((acc, cur) => acc
              .filter((option) => option !== cur.column), optionsColumn)
            .map((optionCol, index) => (
              <option key={ index } value={ optionCol }>{optionCol}</option>
            ))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparação:
        <select
          name="comparison"
          value={ compare }
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setCompare(target.value) }
        >
          {optionsComparison.map((optionComp, index) => (
            <option key={ index } value={ optionComp }>{optionComp}</option>
          ))}
          {/* <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option> */}
        </select>
      </label>
      <input
        type="number"
        value={ numValue }
        data-testid="value-filter"
        placeholder="Digite um número"
        onChange={ ({ target }) => setNumValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilterByNumericValues([
            ...filterByNumericValues,
            {
              column: col,
              comparison: compare,
              value: numValue,
            }]);
        } }
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Filters;
