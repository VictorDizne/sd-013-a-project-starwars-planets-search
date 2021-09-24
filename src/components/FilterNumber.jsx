import React, { useContext, useState, useEffect } from 'react';
import tableContext from '../context';

const FilterNumber = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const [population, setPopulation] = useState(true);
  const [orbital, setOrbital] = useState(true);
  const [diameter, setDiameter] = useState(true);
  const [rotation, setRotation] = useState(true);
  const [surface, setSurface] = useState(true);

  const { setFilters, filters,
    filters: { filterByNumericValues }, data, setDataTable } = useContext(tableContext);

  useEffect(() => {
    const removeFilter = () => {
      if (column === 'population') {
        setPopulation(false);
      }
      if (column === 'orbital_period') {
        setOrbital(false);
      }
      if (column === 'diameter') {
        setDiameter(false);
      }
      if (column === 'rotation_period') {
        setRotation(false);
      }
      if (column === 'surface_water') {
        setSurface(false);
      }
    };
    removeFilter();
  }, [column]);

  const columnSelect = (e) => {
    setColumn(e.target.value);
  };

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
      planetFilter = data.filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'igual a') {
      planetFilter = data.filter((planet) => Number(planet[column]) === Number(value));
    }
    if (comparison === 'menor que') {
      planetFilter = data.filter((planet) => Number(planet[column]) < Number(value));
    }

    setDataTable(planetFilter);
  };

  const addPopulation = () => setPopulation(true);
  const addOrbital = () => setOrbital(true);
  const addDiameter = () => setDiameter(true);
  const addRotation = () => setRotation(true);
  const addSurface = () => setSurface(true);

  return (
    <div>
      <label htmlFor="column-filter">
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
      <label htmlFor="comparison-filter">
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
      <label htmlFor="number-value">
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
        data-testid="button-filter"
        onClick={ setInformation }
      >
        Buscar
      </button>
      <div>
        { !population
          && <button type="button" onClick={ addPopulation }>population</button> }
        { !orbital
          && <button type="button" onClick={ addOrbital }>orbital</button> }
        { !diameter
          && <button type="button" onClick={ addDiameter }>diameter</button> }
        { !rotation
          && <button type="button" onClick={ addRotation }>rotation</button> }
        { !surface
          && <button type="button" onClick={ addSurface }>surface</button> }
      </div>
    </div>
  );
};

export default FilterNumber;
