import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/index';

function Inputs() {
  const [nameInput, setNameInput] = useState('');
  const { handleFilters } = useContext(Context);

  const handleName = ({ target }) => {
    setNameInput(target.value);
  };

  useEffect(() => {
    handleFilters(nameInput);
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

export default Inputs;
