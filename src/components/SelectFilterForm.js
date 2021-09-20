import React, { useContext, useState } from 'react';
import ContextSwapi from '../context/ContextSwapi';

const initialColumnsFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function SelectFilterForm() {
  const [numberPopulation, setNumberPopulation] = useState('0');
  const [columnsFilter, setColumnsFilter] = useState(initialColumnsFilter);
  const {
    swapi, setnameOfThePlanet, setfilterByNumericValues, delFilterByNumericValues,
  } = useContext(ContextSwapi);

  const onChangeNumberPopulation = (e) => {
    const { value } = e.target;
    if (value.match(/^[0-9]/)) return setNumberPopulation(e.target.value);
  };

  const addNewObjeto = () => {
    const column = document.getElementById('column-filter').value;
    const comparison = document.getElementById('comparison-filter').value;
    setfilterByNumericValues({
      value: numberPopulation,
      column,
      comparison,
    });
    setColumnsFilter(columnsFilter.filter((i) => i !== column));
  };

  const deleteFilter = () => {
    const column = document.getElementById('view-column-filter').innerText;
    setColumnsFilter([...columnsFilter, column]);
    delFilterByNumericValues(column);
  };

  const tableViewFilter = (listaFilter, onclick) => (
    <ul>
      {listaFilter.filters.filterByNumericValues.map((item, index) => (
        <li key={ index * Math.PI }>
          <button type="button" id="view-column-filter">{item.column}</button>
          <button type="button" id="view-column-comparison">{item.comparison}</button>
          <button type="button" id="view-column-value">{item.value}</button>
          <button type="button" data-testid="filter" onClick={ onclick }>x</button>
        </li>
      ))}
    </ul>
  );

  if (!swapi) return null;

  return (
    <div className="filter-container">
      <div>
        <form action="">
          <input
            data-testid="name-filter"
            type="text"
            value={ swapi.filters.filterByName.name }
            onChange={ setnameOfThePlanet }
          />
          <select name="select" id="column-filter" data-testid="column-filter">
            {columnsFilter.map((i, key) => <option key={ key } value={ i }>{i}</option>)}
          </select>
          <select name="select" id="comparison-filter" data-testid="comparison-filter">
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            value={ numberPopulation }
            onChange={ onChangeNumberPopulation }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ addNewObjeto }
          >
            Aplicar
          </button>
        </form>
      </div>
      <br />
      <div>
        {tableViewFilter(swapi, deleteFilter)}
      </div>
    </div>
  );
}
