import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SelectPlanet() {
  const { data, setData } = useContext(Context);
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: '>',
    value: 0,
  });

  const onChangeHandler = (e) => {
    setSelected({
      ...selected,
      [e.target.id]: e.target.value });
    console.log(selected.value);
  };

  const dataFilter = () => {
    if (selected.comparison === 'maior que') {
      return (data
        .filter((d) => Number(d[selected.column]) > Number(selected.value)));
    }
    if (selected.comparison === 'menor que') {
      return (data
        .filter((d) => Number(d[selected.column]) < Number(selected.value)));
    }
    return (
      data
        .filter((d) => Number(d[selected.column]) === Number(selected.value))
    );
  };

  const handleFilter = () => {
    setData(dataFilter);
  };

  return (
    <div>
      <select onChange={ onChangeHandler } id="column" data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        onChange={ onChangeHandler }
        id="comparison"
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ onChangeHandler }
        type="number"
        id="value"
        data-testid="value-filter"
      />
      <button
        onClick={ handleFilter }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectPlanet;
