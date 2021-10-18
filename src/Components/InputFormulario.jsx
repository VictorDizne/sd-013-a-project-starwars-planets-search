import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

export default function FilterForm() {
  // OPÇOES DO SELECT
  const [params, setParams] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  // VALOR DEFAULT DO SELECT
  const [select, setSelect] = useState({
    column: 'population', comparison: 'maior que', value: '' });

  const { filters, setFilter } = useContext(Context);
  const { filterByNumericValues } = filters;

  // FILTRAR POR NOME
  const handleNameChange = ({ target: { value } }) => {
    setFilter({
      filterByNumericValues: filters.filterByNumericValues,
      filterByName: { name: value.toLowerCase() },
    });
  };

  // FILTRA O ESTADO DE COLUNAS, EXCLUINDO OQUE JA FOI PESQUISADO
  const deleteFilter = () => {
    setParams(params.filter((p) => p !== select.column));
  };

  // SUBMIT
  const handleFilter = () => {
    deleteFilter();
    setFilter({
      filterByName: filters.filterByName,
      filterByNumericValues: [...filterByNumericValues, { ...select }],
    });
  };

  // PEGA O VALOR NUMERICO
  const handleNumberChange = ({ target: { value } }) => {
    setSelect({
      comparison: select.comparison,
      column: select.column,
      value,
    });
  };

  // PEGA O VALOR DA COLUNA
  const handleColumnChange = ({ target: { value } }) => {
    setSelect({
      column: value,
      comparison: select.comparison,
      value: select.value,
    });
  };

  // PEGA O PARAMETRO DE COMPARAÇÃO
  const handleComparisonChange = ({ target: { value } }) => {
    setSelect({
      column: select.column,
      comparison: value,
      value: select.value,
    });
  };

  // REMOVE OS FILTROS
  const handleFilterRemove = () => {
    console.log('teste');
  };

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={ handleNameChange }
          data-testid="name-filter"
        />
      </label>
      <select data-testid="column-filter" onChange={ handleColumnChange }>
        {params.map((param, index) => <option key={ index }>{param}</option>)}
      </select>
      <select data-testid="comparison-filter" onChange={ handleComparisonChange }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="numerical">
        Valor:
        <input
          id="numerical"
          type="number"
          data-testid="value-filter"
          onChange={ handleNumberChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="filter"
        onClick={ handleFilterRemove }
      >
        X
      </button>
    </form>
  );
}
