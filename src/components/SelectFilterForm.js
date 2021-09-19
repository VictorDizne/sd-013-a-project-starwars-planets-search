import React, { useContext, useState } from 'react';
import ContextSwapi from '../context/ContextSwapi';

export default function SelectFilterForm() {
  const [numberPopulation, setNumberPopulation] = useState();
  const columnsFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const onChangeNumberPopulation = (e) => {
    const { value } = e.target;
    if (value.match(/^[0-9]/)) return setNumberPopulation(e.target.value);
  };

  const {
    swapi, setnameOfThePlanet, setfilterByNumericValues,
  } = useContext(ContextSwapi);

  const addNewObjeto = () => {
    setfilterByNumericValues({
      value: numberPopulation,
      column: document.getElementById('column-filter').value,
      comparison: document.getElementById('comparison-filter').value,
    });
  };

  if (!swapi) return null;

  return (
    <div className="filter-container">
      <form action="">
        <input
          data-testid="name-filter"
          type="text"
          value={ swapi.filters.filterByName.name }
          onChange={ setnameOfThePlanet }
        />
        <select name="select" id="column-filter" data-testid="column-filter">
          {columnsFilter
            .filter((i) => !swapi.filters.filterByNumericValues
              .map((j) => j.column).includes(i))
            .map((i, key) => <option key={ key } value={ i }>{i}</option>)}
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
  );
}
