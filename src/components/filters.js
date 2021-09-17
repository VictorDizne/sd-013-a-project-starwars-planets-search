import React, { useContext, useState } from 'react';
import MyContext from '../context/myContext';

function Filters() {
  const { data, setData } = useContext(MyContext);

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

  function onChangeHandler(e) {
    setSelected({
      ...selected,
      [e.target.id]: e.target.value });
  }

  function selectedFilter() {
    if (selected.comparison === 'maior que') {
      return (
        data.filter((d) => Number(d[selected.column]) > Number(selected.value)));
    }
    if (selected.comparison === 'menor que') {
      return (
        data.filter((d) => Number(d[selected.column]) < Number(selected.value)));
    }
    return (
      data.filter((d) => Number(d[selected.column]) === Number(selected.value))
    );
  }

  function handleFilter() {
    const newArray = selected.array.filter((item) => item !== selected.column);
    setData(selectedFilter);
    setSelected({
      ...selected,
      array: newArray,
    });
  }

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
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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

export default Filters;
