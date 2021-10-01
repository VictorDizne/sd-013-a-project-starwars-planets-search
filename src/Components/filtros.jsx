import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const Filtros = () => {
  const { setFiltros, stateLocal: { drop } } = useContext(Context);
  const comparison = ['maior que', 'igual a', 'menor que'];
  const SELECECAO = ['name',
    'rotation_period',
    'orbital_period', 'diameter',
    'climate', 'gravity',
    'terrain', 'surface_water', 'population'];
  const [valueDrop, setDrop] = useState({
    comparison: 'maior que',
    value: '',
    column: 'population',

  });
  const [sortValue, setSortValue] = useState('');

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

  const sortFunc = ({ name, value }) => {
    setSortValue((prev) => ({ ...prev, [name]: value }));
  };
  const order = () => {
    setFiltros((prev) => ({ ...prev, order: sortValue }));
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
          onChange={ (e) => funDrop(e.target) }
          name="column"
        >
          {
            drop && drop.map((texto) => (
              <option key={ texto }>{texto}</option>
            ))
          }
        </select>
        drop
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          onChange={ (e) => funDrop(e.target) }
          name="comparison"
          data-testid="comparison-filter"
        >
          {
            comparison.map((texto) => (
              <option key={ texto } value={ texto }>{texto}</option>
            ))
          }
        </select>
        comparison
      </label>
      <label htmlFor="value">
        <input
          type="number"
          name="value"
          onChange={ (e) => funDrop(e.target) }
          data-testid="value-filter"
        />
      </label>
      <button data-testid="button-filter" type="button" onClick={ search }>Buscar</button>
      <label htmlFor="type">
        <select
          data-testid="column-sort"
          onChange={ (e) => sortFunc(e.target) }
          name="column"
        >
          {SELECECAO.map((e) => (
            <option key={ e }>{e}</option>
          ))}
        </select>
      </label>
      <label htmlFor="sort">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => sortFunc(e.target) }
          name="sort"
        />
      </label>
      <label htmlFor="sort">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sort"
          onChange={ (e) => sortFunc(e.target) }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ order }
      >
        ordernar

      </button>
    </div>
  );
};

export default Filtros;
