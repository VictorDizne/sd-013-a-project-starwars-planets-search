import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchInput({ handleCallBack, receiveInformation }) {
  const [inputValue, setInputValue] = useState({
    searchInput: '',
    selectColumn: 'population',
    selectComparison: 'maior que',
    inputNumber: 0,
  });

  const sendInformation = () => receiveInformation(inputValue, true);

  const handleChange = ({ target: { name, value } }) => {
    handleCallBack(value.toLowerCase());
    setInputValue({ ...inputValue, [name]: value });
  };

  const { searchInput, selectColumn, selectComparison, inputNumber } = inputValue;
  return (
    <section>
      <label htmlFor="planetName">
        Pesquise pelo nome do planeta:
        <input
          id="planetName"
          name="searchInput"
          type="text"
          onChange={ (e) => handleChange(e) }
          value={ searchInput }
          data-testid="name-filter"
        />
      </label>
      <select
        name="selectColumn"
        id="column-filter"
        data-testid="column-filter"
        value={ selectColumn }
        onChange={ (e) => handleChange(e) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
      <button type="button" data-testid="button-filter" onClick={ () => sendInformation() }>Filtrar</button>
    </section>
  );
}

SearchInput.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
};

export default SearchInput;
