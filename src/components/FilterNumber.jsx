import React, { useContext, useState } from 'react';
import tableContext from '../context';

const FilterNumber = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const [population, setPopulation] = useState(true);
  const [orbital, setOrbital] = useState(true);
  const [diameter, setDiameter] = useState(true);
  const [rotation, setRotation] = useState(true);
  const [surface, setSurface] = useState(true);

  const { setFilters, filters,
    filters: { filterByNumericValues }, data, dataTable,
    setDataTable } = useContext(tableContext);

  const removeFilter = (estado) => {
    if (estado === 'population') {
      setPopulation(false);
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

  // funcao pra desfazer filtro selecionado;

  const notFilter = (filterColumn) => {
    if (filterColumn === 'population') {
      setPopulation(true);
    }
    if (filterColumn === 'orbital_period') {
      setOrbital(true);
    }
    if (filterColumn === 'diameter') {
      setDiameter(true);
    }
    if (filterColumn === 'rotation_period') {
      setRotation(true);
    }
    if (filterColumn === 'surface_water') {
      setSurface(true);
    }

    const newFilterByNumericValues = filterByNumericValues
      .filter((item) => item.column !== filterColumn);
    setFilters({ ...filters,
      filterByNumericValues: newFilterByNumericValues,
    });
    // por enquanto só atualiza a chave filterByNumericValues
    console.log('inicio da filtragem 1');
    let newFiltered = data;
    newFilterByNumericValues.forEach((filter) => {
      console.log('inicio da filtragem 2');
      if (filter.comparison === 'maior que') {
        newFiltered = newFiltered
          .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
      }
      if (filter.comparison === 'igual a') {
        newFiltered = newFiltered
          .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
      }
      if (filter.comparison === 'menor que') {
        newFiltered = newFiltered
          .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
      }
    });
    setDataTable(newFiltered);
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
        && <button data-testid="filter" type="button" onClick={ () => notFilter('population') }>population x</button>
        }
        { !orbital
        && <button data-testid="filter" type="button" onClick={ () => notFilter('orbital_period') }>orbital x</button> }
        {
          !diameter
        && <button data-testid="filter" type="button" onClick={ () => notFilter('diameter') }>diameter x</button>
        }
        {
          !rotation
        && <button data-testid="filter" type="button" onClick={ () => notFilter('rotation_period') }>rotation x</button>
        }

        {
          !surface
        && <button data-testid="filter" type="button" onClick={ () => notFilter('surface_water') }>surface x</button>
        }
      </div>
    </div>
  );
};

export default FilterNumber;
