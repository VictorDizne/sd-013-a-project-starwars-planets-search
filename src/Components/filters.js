import React, { useContext, useState } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Filters() {
  const context = useContext(PlanetContext);
  const { filters, setFilters } = context;
  const [types, setFilterTypes] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filtercomparison, setfilterComparison] = useState('maior que');
  const [filternumber, setNumber] = useState(0);

  const setFilterByName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const handleFilter = () => {
    const { filterByNumericValues } = filters;
    const objNumeric = {
      column: types,
      comparison: filtercomparison,
      value: filternumber,
    };

    setFilters(
      { ...filters, filterByNumericValues: [...filterByNumericValues, objNumeric] },
    );
  };

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
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
      <input onClick={ handleFilter } type="button" data-testid="button-filter" />
    </div>
  );
}

export default Filters;
