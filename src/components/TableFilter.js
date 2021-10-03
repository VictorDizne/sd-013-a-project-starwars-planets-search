import React, { useContext, useState } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import usePlanetFilters from '../hooks/usePlanetFilters';

const columnsOptionsToFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function TableFilter() {
  const [numberInput, setNumberInput] = useState(0);
  const [selectedColumn, setSelectedColumn] = useState();
  const [selectedCompareMethod, setSelectedCompareMethod] = useState();
  const { planetData, setPlanetData } = useContext(PlanetContext);
  const { setPlanetsByNumericValues } = usePlanetFilters();

  const applyFilter = () => {
    setPlanetsByNumericValues({
      value: numberInput,
      column: selectedColumn,
      comparison: selectedCompareMethod,
    });
  };

  const changeColumm = ({ target: { value } }) => {
    setSelectedColumn(value);
  };

  const changeCompareMethod = ({ target: { value } }) => {
    setSelectedCompareMethod(value);
  };

  if (!planetData) return null;

  return (
    <form>
      <input
        data-testid="name-filter"
        className="planetFilter"
        type="text"
        placeholder="Planeta"
        onChange={
          (e) => setPlanetData({
            ...planetData,
            filters: { ...planetData.filters, filterByName: { name: e.target.value } },
          })
        }
      />
      <select className="filterBy" data-testid="column-filter" onChange={ changeColumm }>
        {
          columnsOptionsToFilter
            .map((columnName, idx) => (
              <option
                key={ `${columnName}${idx}` }
                value={ columnName }
              >
                { columnName }
              </option>
            ))
        }
      </select>
      <select
        className="toCompare"
        data-tesid="comparision-filter"
        onChange={ changeCompareMethod }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberInput }
        onChange={ ({ target: { value } }) => setNumberInput(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilter }
      >
        Aplicar
      </button>
    </form>
  );
}
