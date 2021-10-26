import React, { useState, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const size = 0.7;
  const [formValues, setformValues] = useState({
    column: 'population',
    comparison: 'maior_que',
    value: '',
  });

  const [select, setSelect] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const h3style = { display: 'inline-block', margin: '0 1rem' };

  useEffect(() => {

  }, []);

  return (
    <PlanetsContext.Consumer>
      { (contextValue) => {
        const { filter, setFilter, setChanges, data } = contextValue;

        const dataKeys = data[0] ? Object.keys(data[0]) : [];

        console.log(dataKeys);

        const handleButton = () => {
          // console.clear();
          setSelect(select.filter((item) => item !== formValues.column));
          const atualFilters = filter.filterByNumericValues.map((value) => value);
          atualFilters.push(formValues);

          setFilter({ ...filter, filterByNumericValues: atualFilters });

          setChanges('filterByNunber');
        };

        const handleDeleteFilter = (filterType) => {
          // devolve o filtro às opções.
          setSelect([...select, filterType]);

          // retira o filtro dos filtros atuais
          const atualFilters = filter.filterByNumericValues
            .map((value) => value)
            .filter((item) => item.column !== filterType);

          setFilter({ ...filter, filterByNumericValues: atualFilters });

          setChanges('deletFilterByNunber');
        };

        const handleChange = ({ target }) => {
          const { id, value } = target;
          setformValues({ ...formValues, [id]: value });
        };

        const handleFilter = (filterName, filterSearch) => {
          setFilter({ ...filter, [filterName]: `${filterSearch}` });
        };

        const handleSort = ({ target }) => {
          const { name, value } = target;
          const currentOrder = { ...filter.order, [name]: value };
          setFilter({ ...filter, order: currentOrder });
        };

        return (
          <div style={ { fontSize: `${size}em`, marginBottom: `${size}em` } }>
            {/* ========== filtro por nome ========== */}
            <label htmlFor="search_by_name">
              <h3 style={ h3style }>FILTRO POR NOME</h3>
              <input
                data-testid="name-filter"
                type="text"
                id="search_by_name"
                onChange={ ({ target }) => handleFilter('filterByName', target.value) }
              />
            </label>

            {/* ========== filtro por coluna ========== */}
            <form>
              <h3 style={ h3style }>FILTRO POR COLUNA</h3>
              <select data-testid="column-filter" id="column" onChange={ handleChange }>
                { select.map((option, index) => (
                  <option key={ index } value={ option }>{ option }</option>
                )) }
              </select>
              <select
                data-testid="comparison-filter"
                id="comparison"
                onChange={ handleChange }
              >
                <option value="maior_que">maior que</option>
                <option value="menor_que">menor que</option>
                <option value="igual_a">igual a</option>
              </select>
              <input
                type="text"
                data-testid="value-filter"
                id="value"
                onChange={ handleChange }
              />
              <button
                data-testid="button-filter"
                type="button"
                onClick={ () => handleButton() }
              >
                Aplicar filtro
              </button>
            </form>

            {/* ========== Ordena por coluna ========== */}
            <form>
              <h3 style={ h3style }>ORDEM POR COLUNA</h3>
              <select data-testid="column-sort" name="column" onChange={ handleSort }>
                { dataKeys.map((value, key) => (
                  <option key={ key }>{value}</option>
                )) }
              </select>

              <label htmlFor="DESC">
                <input
                  id="DESC"
                  type="radio"
                  name="sort"
                  value="DESC"
                  onChange={ handleSort }
                />
                Descendente
              </label>
              <label htmlFor="ASC">
                <input
                  id="ASC"
                  type="radio"
                  name="sort"
                  value="ASC"
                  onChange={ handleSort }
                  defaultChecked
                />
                Ascendente
              </label>
            </form>

            {/* ========== filtros escolhidos ========== */}
            <section>
              { filter.filterByNumericValues.map((value, key) => (
                <div key={ key }>
                  <span>{ `${value.column} ${value.comparison} ${value.value}` }</span>
                  <button
                    data-testid="filter"
                    type="button"
                    onClick={ () => handleDeleteFilter(value.column) }
                  >
                    X
                  </button>
                </div>
              )) }
            </section>
          </div>
        );
      } }
    </PlanetsContext.Consumer>
  );
}

export default Table;
