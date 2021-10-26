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

  // const [usedFilsters, setUsedFilter] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <PlanetsContext.Consumer>
      { (contextValue) => {
        const { filter, setFilter, setChanges } = contextValue;
        // const filterValues = contextValue.filter.filterByNumericValues;

        const handleButton = () => {
          // console.clear();
          setSelect(select.filter((item) => item !== formValues.column));
          const atualfiltes = filter.filterByNumericValues.map((value) => value);
          atualfiltes.push(formValues);

          setFilter({ ...filter, filterByNumericValues: atualfiltes });

          setChanges('filterByNunber');
        };

        const handleDeleteFilter = (filterType) => {
          console.log(filterType);

          // devolve o filtro às opções
          setSelect([...select, filterType]);

          // retira o filtro dos filtros atuais
          const atualfiltes = filter.filterByNumericValues
            .map((value) => value)
            .filter((item) => item.column !== filterType);

          console.log(atualfiltes);
          setFilter({ ...filter, filterByNumericValues: atualfiltes });

          setChanges('deletFilterByNunber');
        };

        const handleChange = ({ target }) => {
          const { id, value } = target;
          setformValues({ ...formValues, [id]: value });
        };

        const handleFilter = (filterName, filterSearch) => {
          setFilter({ ...filter, [filterName]: `${filterSearch}` });
        };

        return (
          <div style={ { fontSize: `${size}em`, marginBottom: `${size}em` } }>
            <label htmlFor="search_by_name">
              Nome
              <input
                data-testid="name-filter"
                type="text"
                id="search_by_name"
                onChange={ ({ target }) => handleFilter('filterByName', target.value) }
              />
            </label>
            <form>
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
            <section>
              { filter.filterByNumericValues.map((value, key) => (
                <div key={ key }>
                  <span>{ `${value.column} ${value.comparison} ${value.value}` }</span>
                  <button
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
