import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/index';

function TextInput() {
  const [nameInput, setNameInput] = useState('');
  const { handleFiltersName } = useContext(Context);

  const handleName = ({ target }) => {
    setNameInput(target.value);
  };

  useEffect(() => {
    handleFiltersName(nameInput);
  }, [nameInput]);

  return (
    <label htmlFor="nameInput">
      Busca por nome:
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleName }
        id="nameInput"
      />
    </label>
  );
}

export default TextInput;
