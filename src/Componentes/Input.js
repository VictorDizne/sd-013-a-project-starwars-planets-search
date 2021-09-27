import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';

export default function Input() {
  // abaixo puxamos do Context a função handleChange declarada no Provider, na qual pega o valor digitado no input name-filter abaixo e o salva no estado nameFilter.
  const {
    handleChange,
    handleClick,
    column,
    comparison,
    valor,
    setColumnFilter,
    setComparisonFilter,
    setValorFilter,
    columnItems,
  } = useContext(MyContext);

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          onChange={ handleChange }
          data-testid="name-filter"
          type="text"
          placeholder="Busca por nome"
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          <select
            onChange={ ({ target: { value } }) => setColumnFilter(value) }
            value={ column }
            data-testid="column-filter"
          >
            { columnItems.map(
              (coluna) => <option key={ coluna } value={ coluna }>{coluna}</option>,
            )}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            onChange={ ({ target: { value } }) => setComparisonFilter(value) }
            value={ comparison }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            onChange={ ({ target: { value } }) => setValorFilter(value) }
            type="number"
            data-testid="value-filter"
            value={ valor }
          />
          <button
            onClick={
              () => handleClick({
                column,
                comparison,
                value: valor,
              })
            }
            type="button"
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </label>
      </div>
    </div>
  );
}
