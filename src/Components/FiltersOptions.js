import React, { useState, useContext } from 'react';
import MyContext from '../Context/MyContext';

function FiltersOptions() {
  const { data, setData } = useContext(MyContext);
  const [selected, setSelected] = useState({
    popColumn: 'population',
    popCondition: 'maior que',
    popValue: 0,
  });

  const dropDownConditions = () => {
    const optionsConditions = ['maior que',
      'menor que', 'igual a'];
    return optionsConditions
      .map((option, id) => <option key={ id }>{ option }</option>);
  };

  const clickChangeState = ({ target }) => {
    setSelected({
      ...selected,
      [target.id]: target.value });
  };

  const optionColumn = () => {
    const columnsTable = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return columnsTable.map((option) => <option key={ option }>{ option }</option>);
  };

  const funcCompare = () => {
    if (selected.popCondition === 'maior que') {
      return data
        .filter((item) => Number(item[selected.popColumn]) > Number(selected.popValue));
    }
    if (selected.popCondition === 'menor que') {
      return data
        .filter((item) => Number(item[selected.popColumn]) < Number(selected.popValue));
    }
    return data
      .filter((item) => Number(item[selected.popColumn]) === Number(selected.popValue));
  };

  const btnClickCondition = () => {
    setData(funcCompare);
  };

  return (

    <div>
      <label htmlFor="name">
        <select
          id="popColumn"
          onChange={ clickChangeState }
          data-testid="column-filter"
          name="name"
        >
          { optionColumn() }
        </select>
      </label>

      <label htmlFor="name">
        <select
          id="popCondition"
          onChange={ clickChangeState }
          data-testid="comparison-filter"
          name="name"
        >
          { dropDownConditions() }
        </select>

        <input
          onChange={ clickChangeState }
          type="number"
          id="popValue"
          data-testid="value-filter"
        />

        <button
          onClick={ btnClickCondition }
          type="button"
          data-testid="button-filter"
        >
          Aplicar filtro
        </button>
      </label>
    </div>
  );
}

export default FiltersOptions;
