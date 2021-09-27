import React, { useState, useContext } from 'react';
import context from '../context/Context';

function Filter() {
  const column = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const { item, setItem } = useContext(context);
  const [options, setOptions] = useState({
    column: 'population', comparison: '>', value: 0 });
  const [filter, setFilter] = useState(column);

  const notFilter = () => {
    setFilter(column);
    const filtrar = filter.filter((i) => i !== options.column);
    setFilter(filtrar);
  };

  const criarColuna = () => {
    const getColumn = filter.map((option, id) => <option key={ id }>{ option }</option>);
    return getColumn;
  };

  const comparacao = () => {
    const compNames = ['maior que', 'menor que', 'igual a'];
    const getComp = compNames.map((option, id) => <option key={ id }>{ option }</option>);
    return getComp;
  };

  const handleChange = (event) => {
    setOptions({ ...options, [event.target.id]: event.target.value });
  };

  const ifComparacao = () => {
    if (options.comparison === 'maior que') {
      const biggerThan = item
        .filter((i) => Number(i[options.column]) > Number(options.value));
      return biggerThan;
    }
    if (options.comparison === 'menor que') {
      const lowerThan = item
        .filter((i) => Number(i[options.column]) < Number(options.value));
      return lowerThan;
    }
    const equal = item
      .filter((i) => Number(i[options.column]) === Number(options.value));
    return equal;
  };

  // Função usada no click do botão que envia para o estado global nossa condição
  const onChange = () => {
    setItem(ifComparacao);
    notFilter();
  };

  return (

    <div>
      <label htmlFor="name">
        <select
          id="column"
          onChange={ handleChange }
          data-testid="column-filter"
          name="name"
        >
          { criarColuna() }
        </select>
      </label>

      <label htmlFor="name">
        <select
          id="comparison"
          onChange={ handleChange }
          data-testid="comparison-filter"
          name="name"
        >
          { comparacao() }
        </select>

        <input
          onChange={ handleChange }
          type="number"
          id="value"
          data-testid="value-filter"
        />

        <button
          onClick={ onChange }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </label>
    </div>
  );
}

export default Filter;
