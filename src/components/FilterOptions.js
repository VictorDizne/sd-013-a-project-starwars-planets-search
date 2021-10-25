import React, { useContext, useState } from 'react';
import MyContext from '../context/Context';

function FilterOptions() {
  const { data, setData } = useContext(MyContext);
  const [selected, setSelected] = useState({
    array:
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
    column: '',
    comparison: '',
    value: 0,
  });

  const handleChange = (event) => {
    setSelected({
      ...selected, [event.target.id]: event.target.value });
  };

  const dataFilter = () => {
    if (selected.comparison === 'maior que') {
      return (data
        .filter((col) => Number(col[selected.column]) > Number(selected.value)));
    }
    if (selected.comparison === 'menor que') {
      return (data
        .filter((col) => Number(col[selected.column]) < Number(selected.value)));
    }
    return (
      data
        .filter((col) => Number(col[selected.column]) === Number(selected.value))
    );
  };

  const filterHandle = () => {
    const array2 = selected.array.filter((col) => col !== selected.column);
    setData(dataFilter);
    setSelected({
      ...selected,
      array: array2,
    });
  };

  return (
    <div>
      <select
        name="column"
        id="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {selected.array.map((col, index) => (<option key={ index }>{ col }</option>))}
      </select>
      <select
        name="comparison"
        onChange={ handleChange }
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value"
        onChange={ handleChange }
        name="value"
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ filterHandle }
        data-testid="button-filter"
      >
        Adcionar filtro
      </button>
    </div>
  );
}

export default FilterOptions;
