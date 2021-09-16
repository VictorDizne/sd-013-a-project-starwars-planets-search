import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SelectPlanet() {
  const { data, setData } = useContext(Context);
  const [selected, setSelected] = useState({
    array: ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
    column: '',
    comparison: '',
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
    const newArray = selected.array.filter((item) => item !== selected.column);
    setData(dataFilter);
    setSelected({
      ...selected,
      array: newArray,
    });
  };

  return (
    <div>
      <select onChange={ onChangeHandler } id="column" data-testid="column-filter">
        {selected.array.map((item, i) => (<option key={ i }>{ item }</option>)) }
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
