import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const Filtros = () => {
  const { setFiltros, stateLocal: { drop } } = useContext(Context);
  const comparison = ['MAIOR QUE', 'MENOR QUE', 'IGUAL A'];
  const [valueDrop, setDrop] = useState();
  const InputName = ({ value }) => {
    setFiltros((prev) => ({ ...prev,
      filterByName: {
        name: value,
      },
    }));
  };
  const funDrop = ({ name, value }) => {
    setDrop((prev) => ({ ...prev, [name]: value }));
  };
  const search = () => {
    setFiltros((prev) => ({ ...prev,
      filterByNumericValues:
      prev.filterByNumericValues.concat(valueDrop) }));
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
          onChange={ (e) => InputName(e.target) }
        />
      </label>
      <label htmlFor="drop">
        <select
          id="drop"
          data-testid="column-filter"
          onClick={ (e) => funDrop(e.target) }
          name="column"
        >
          {
            drop && drop.map((texto) => (
              <option key={ texto }>{texto}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          onClick={ (e) => funDrop(e.target) }
          name="comparison"
        >
          {
            comparison.map((texto) => (
              <option key={ texto }>{texto}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          id="value"
          name="value"
          onChange={ (e) => funDrop(e.target) }
          data-testid="value-filter"
        />
      </label>
      <button data-testid="button-filter" type="button" onClick={ search }>Buscar</button>
    </div>
  );
};

export default Filtros;
