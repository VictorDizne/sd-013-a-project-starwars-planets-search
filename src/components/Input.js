import React from 'react';

function Input() {
  return (
    <label htmlFor="algumaCoisa">
      algumNome
      <input type="text" onChange="algumaFunção" id="algumaCoisa" />
    </label>
  );
}

export default Input;
