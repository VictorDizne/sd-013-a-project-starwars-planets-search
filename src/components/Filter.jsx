import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const arrayOptionsSelect = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
const arrayCompareSelect = ['maior que', 'menor que', 'igual a'];

const infosFilter = (context, setContext, setArrayOptions) => {
  const column = document.getElementById('column-filter').value;
  const comparison = document.getElementById('comparison-filter').value;
  const valueRecept = document.getElementById('value-filter').value;
  const filterNumbers = {
    column,
    comparison,
    value: valueRecept,
  };
  setArrayOptions(arrayOptionsSelect.filter((i) => i !== column));
  const filtByName = context.filters.filterByName;
  setContext({ ...context,
    filters: {
      filterByName: filtByName,
      filterByNumericValues: [
        ...context.filters.filterByNumericValues,
        filterNumbers,
      ] } });
};

export default function Filter() {
  const { context, setContext } = useContext(StarWarsContext);
  const [arrayOptions, setArrayOptions] = useState(arrayOptionsSelect);

  if (!context) return null;

  return (
    <form>
      Filtar por nome:
      <input
        onChange={ (e) => setContext({
          ...context,
          filters: {
            filterByNumericValues: [
              ...context.filters.filterByNumericValues,
            ],
            filterByName: {
              name: e.target.value } } }) }
        data-testid="name-filter"
      />
      Filtrar por:
      <select
        data-testid="column-filter"
        id="column-filter"
      >
        { arrayOptions
          .map((item, index) => <option key={ index } id={ index }>{ item }</option>) }
      </select>
      Comparação:
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
      >
        { arrayCompareSelect
          .map((item, index) => <option key={ index } id={ index }>{ item }</option>) }
      </select>
      Valor:
      <input
        type="text"
        data-testid="value-filter"
        id="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => infosFilter(context, setContext, setArrayOptions) }
      >
        Acionar filtro
      </button>
    </form>
  );
}
