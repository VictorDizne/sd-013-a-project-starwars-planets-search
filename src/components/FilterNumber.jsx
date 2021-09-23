import React, { useContext, useState } from 'react';
import tableContext from '../context';

const FilterNumber = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const { setFilters, filters, data, setDataTable } = useContext(tableContext);

  const setInformation = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
    console.log('ate aqui xeguei');
    const filteredPlanet = data.filter((planet) => console.log(planet[column]));

    setDataTable(filteredPlanet);
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Selecione um(s) Filtro:
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option selected value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Selecione a faixa de valor do Filtro:
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor menor">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="number-value">
        Escolha um valor:
        <input
          type="number"
          onChange={ (e) => setValue(e.target.value) }
          id="number-value"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ setInformation }
      >
        Buscar
      </button>
    </div>
  );
};

export default FilterNumber;
