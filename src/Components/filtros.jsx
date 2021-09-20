import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const Filtros = () => {
  const { ProcuraName, local: { x, comparison } } = useContext(Context);
  const InputName = ({ target }) => {
    const { value } = target;
    ProcuraName(value);
  };
  const search = () => {
    // DropSearch;
  };
  const [DropSearch, setDrop] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const funDrop = ({ target }) => {
    const { name, value } = target;
    setDrop((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <label htmlFor="name">
        Nome Planet
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          name="name"
          onChange={ InputName }
        />
      </label>
      <label htmlFor="drop">
        <select id="drop" data-testid="column-filter" onClick={ funDrop } name="column">
          {
            x && x.map((texto) => (
              <option key={ texto }>{texto}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          onClick={ funDrop }
          name="comparison"
        >
          {
            comparison && comparison.map((texto) => (
              <option key={ texto }>{texto}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="value">
        <input type="text" id="value" name="value" onChange={ funDrop } />
      </label>
      <button data-testid="button-filter" type="button" onClick={ search }>Buscar</button>
    </div>
  );
};

export default Filtros;
