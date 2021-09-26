import PropTypes from 'prop-types';
import React, { useState } from 'react';

function SelectInputs({ receiveInformation }) {
  const [inputValue, setInputValue] = useState({
    selectColumn: 'population',
    selectComparison: 'maior que',
    inputNumber: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const { selectColumn, selectComparison, inputNumber } = inputValue;

  const sendInformation = () => {
    receiveInformation(inputValue, true);
    const filterSelect = document.querySelector('#column-filter');
    const columnsArray = Array.from(filterSelect).map((option) => option.value);

    if (columnsArray.length === 1) return null;

    const optionIndex = columnsArray.indexOf(selectColumn);
    // console.log(optionIndex);
    filterSelect.remove(optionIndex);
    setInputValue({ ...inputValue, selectColumn: Array.from(filterSelect)[0].value });
  };

  return (
    <section>
      <select
        name="selectColumn"
        id="column-filter"
        data-testid="column-filter"
        value={ selectColumn }
        onChange={ (e) => handleChange(e) }
      >
        <option hidden={ false } value="population">population</option>
        <option hidden={ false } value="orbital_period">orbital_period</option>
        <option hidden={ false } value="diameter">diameter</option>
        <option hidden={ false } value="rotation_period">rotation_period</option>
        <option hidden={ false } value="surface_water">surface_water</option>
      </select>
      <select
        name="selectComparison"
        id="comparison-filter"
        data-testid="comparison-filter"
        value={ selectComparison }
        onChange={ (e) => handleChange(e) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="inputNumber"
        data-testid="value-filter"
        value={ inputNumber }
        onChange={ (e) => handleChange(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => sendInformation() }
      >
        Filtrar
      </button>
    </section>
  );
}

SelectInputs.propTypes = {
  receiveInformation: PropTypes.func.isRequired,
};

export default SelectInputs;
