import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Filters() {
  const context = useContext(PlanetContext);
  const { filters, setFilters, data, setRend } = context;
  const [opcoes, setOpcoes] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [types, setFilterTypes] = useState('population');
  const [filtercomparison, setfilterComparison] = useState('maior que');
  const [filternumber, setNumber] = useState(0);

  const setFilterByName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const deleteFilter = (type) => {
    const newOp = opcoes.filter((opcao) => opcao !== type);
    setOpcoes(newOp);
  };

  const setFilterByNumericValue = () => {
    const { filterByNumericValues } = filters;
    const objNumeric = {
      column: types,
      comparison: filtercomparison,
      value: filternumber,
    };

    setFilters(
      { ...filters, filterByNumericValues: [...filterByNumericValues, objNumeric] },
    );
    deleteFilter(types);
  };

  const applyFilters = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;

    const nameFilter = data
      .filter((planet) => planet.name.toLowerCase().includes(name));

    const numericFilter = nameFilter.filter((planet) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        // if (column === 'population'
        // && comparison !== 'menor que'
        // && comparison !== 'igual a'
        // && planet.population === 'unknown') return false;
        // if (column === 'population'
        // && comparison !== 'igual a'
        // && planet.population === 'unknown') return true;
        switch (comparison) {
        case ('igual a'):
          return (Number(planet[column]) === Number(value));
        case ('menor que'):
          return (Number(planet[column]) < Number(value));
        case ('maior que'):
          return (Number(planet[column]) > Number(value));
        default:
          return planet;
        }
      }));
    return numericFilter;
  };

  useEffect(() => {
    setRend(applyFilters());
  }, [filters]);

  const setFilterByNumber = ({ target }) => {
    const { value } = target;
    setNumber(value);
  };

  const setFilterByColumn = ({ target }) => {
    const { value } = target;
    setFilterTypes(value);
  };

  const setFilterByComparison = ({ target }) => {
    const { value } = target;
    setfilterComparison(value);
  };

  return (
    <div>
      <label htmlFor="byName">
        Procure por nome
        <input
          name="name"
          data-testid="name-filter"
          type="text"
          id="byName"
          onChange={ setFilterByName }
        />
      </label>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ setFilterByColumn }
      >
        {opcoes.map((opcao, i) => <option key={ i }>{opcao}</option>)}
      </select>
      <select
        onChange={ setFilterByComparison }
        name="comparison"
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ setFilterByNumber }
        name="number"
        type="number"
        data-testid="value-filter"
      />
      <button
        onClick={ setFilterByNumericValue }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
