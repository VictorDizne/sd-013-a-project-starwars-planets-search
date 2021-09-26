import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchInput({ handleCallBack }) {
  const [inputValue, setInputValue] = useState({
    searchInput: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    handleCallBack(value.toLowerCase());
    setInputValue({ ...inputValue, [name]: value });
  };

  const { searchInput } = inputValue;
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
    </section>
  );
}

SearchInput.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
};

export default SearchInput;
