import React, { useContext, useState } from 'react';
import tableContext from '../context';

const FilterNumber = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const [population, setPopulatio] = useState(true);
  const [orbital, setOrbital] = useState(true);
  const [diameter, setDiameter] = useState(true);
  const [rotation, setRotation] = useState(true);
  const [surface, setSurface] = useState(true);

  const { setFilters, filters,
    filters: { filterByNumericValues }, dataTable,
    setDataTable } = useContext(tableContext);

  const removeFilter = (estado) => {
    if (estado === 'population') {
      setPopulatio(false);
    }
    if (estado === 'orbital_period') {
      setOrbital(false);
    }
    if (estado === 'diameter') {
      setDiameter(false);
    }
    if (estado === 'rotation_period') {
      setRotation(false);
    }
    if (estado === 'surface_water') {
      setSurface(false);
    }
  };

  const columnSelect = (e) => {
    setColumn(e.target.value);
  };

  // Essa função faz os filters e ao mesmo tempo manda as informações de cada busca para o Filter que está no arquivo Provider;

  const setInformation = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
    let planetFilter;
    if (comparison === 'maior que') {
      planetFilter = dataTable
        .filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'igual a') {
      planetFilter = dataTable
        .filter((planet) => Number(planet[column]) === Number(value));
    }
    if (comparison === 'menor que') {
      planetFilter = dataTable
        .filter((planet) => Number(planet[column]) < Number(value));
    }

    setDataTable(planetFilter);
    removeFilter(column);
    if (population) {
      setColumn('population');
    }
  };

  return (
    <div>
      <label className="LabelMuda" htmlFor="column-filter">
        Selecione um(s) Filtro:
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ columnSelect }
        >
          { population && <option value="population">population</option> }
          { orbital && <option value="orbital_period">orbital_period</option>}
          { diameter && <option value="diameter">diameter</option>}
          { rotation && <option value="rotation_period">rotation_period</option>}
          { surface && <option value="surface_water">surface_water</option>}
        </select>
      </label>
      <label className="LabelMuda" htmlFor="comparison-filter">
        Selecione a faixa de valor do Filtro:
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label className="LabelMuda" htmlFor="number-value">
        Escolha um valor:
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setValue(e.target.value) }
          id="number-value"
        />
      </label>
      <button
        type="button"
        className="btn-search"
        data-testid="button-filter"
        onClick={ setInformation }
      >
        Buscar
      </button>
      <div className="buttons-container">
        {
          !population
        && <button type="button" onClick={ () => setPopulatio(true) }>population</button>
        }
        { !orbital
        && <button type="button" onClick={ () => setOrbital(true) }>orbital x</button> }
        {
          !diameter
        && <button type="button" onClick={ () => setDiameter(true) }>diameter x</button>
        }
        {
          !rotation
        && <button type="button" onClick={ () => setRotation(true) }>rotation x</button>
        }

        {
          !surface
        && <button type="button" onClick={ () => setSurface(true) }>surface x</button>
        }
      </div>
    </div>
  );
};

export default FilterNumber;
