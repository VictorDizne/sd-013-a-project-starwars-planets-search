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
    setParams(params.filter((column) => column !== select.column));
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

  // LOGICA DE EXCLUR UM FILTRO E VOLTAR PARA O SELECT
  const removeFilters = (index, item) => {
    setParams([...params, item]);
    const filtros = filters.filterByNumericValues;
    const novaLista = filtros.filter((i) => i.column !== item);
    setFilter({ ...filters, filterByNumericValues: novaLista });
  };

  const tableFilter = (func) => (
    <ol>
      {filters.filterByNumericValues.map((item, index) => (
        <li id={ index } key={ index } data-testid="filter">
          <span id="view-column-filter">{`${item.column} `}</span>
          <span id="view-column-comparison">{`${item.comparison} `}</span>
          <span id="view-column-value">{item.value}</span>
          <button type="button" onClick={ () => func(index, item.column) }>X</button>
        </li>
      ))}
    </ol>
  );

  return (
    <form>
      <label htmlFor="name">
        Name:
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
      <select data-testid="column-sort">
        <option value="name">Name</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="climate">Climate</option>
        <option value="gravity">Gravity</option>
        <option value="terrain">Terrain</option>
        <option value="surface_water">Surface Water</option>
        <option value="population">Population</option>
      </select>
      <label htmlFor="asc">
        ASC
        <input id="asc" type="radio" name="sort" data-testid="column-sort-input-asc" />
      </label>
      <label htmlFor="desc">
        DESC
        <input id="desc" type="radio" name="sort" data-testid="column-sort-input-desc" />
      </label>
      <button type="button" data-testid="column-sort-button">ORDENAR</button>
      {tableFilter(removeFilters)}
    </form>
  );
}
