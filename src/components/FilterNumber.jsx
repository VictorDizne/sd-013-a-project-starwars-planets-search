import React, { useContext, useState, useEffect } from 'react';
import tableContext from '../context';

const FilterNumber = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const [population, setPopulatio] = useState(true);
  const [orbital, setOrbital] = useState(true);
  const [diameter, setDiameter] = useState(true);
  const [rotation, setRotation] = useState(true);
  const [surface, setSurface] = useState(true);

  const { setFilters, filters,
    filters: { filterByNumericValues }, data, setDataTable } = useContext(tableContext);
    // esse useEffect vai rodar a função dentro dele, apenas quando o estado Column for atualizado;
  useEffect(() => {
    const removeFilter = () => {
      if (column === 'population') {
        setPopulatio(false);
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
        { !population
        && <button type="button" onClick={ () => setPopulatio(true) }>population</button>}
        { !orbital
          && <button type="button" onClick={ () => setOrbital(true) }>orbital</button> }
        { !diameter
          && <button type="button" onClick={ () => setDiameter(true) }>diameter</button> }
        { !rotation
          && <button type="button" onClick={ () => setRotation(true) }>rotation</button> }
        { !surface
          && <button type="button" onClick={ () => setSurface(true) }>surface</button> }
      </div>
    </div>
  );
};

export default FilterNumber;
