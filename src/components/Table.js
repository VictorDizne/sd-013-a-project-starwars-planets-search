import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';
import sortFunc from '../utils/mySortFunc';
import TableRow from './TableRow';

const Table = () => {
  const initialState = {
    column: 'population',
    comparison: 'maior que',
    filterValue: '0',
  };
  const [state, setState] = useState(initialState);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [shouldSort, setShouldSort] = useState(true);
  const [filters, setFilters] = useState([]);
  const [shouldReloadOptions, setShouldReloadOptions] = useState(false);
  const [optName, setOptName] = useState('');
  const {
    setNameFiltered,
    setNumericFilters,
    setOptions,
    setLoadFilters,
    setDeletedFilter,
    numericFilters,
    planetsWithAllFilters,
    options,
    notFound,
  } = useContext(planetContext);

  useEffect(() => {
    if (shouldReloadOptions) {
      setOptions([...options, optName]);
      setShouldReloadOptions(false);
      setOptName('');
    }
  }, [shouldReloadOptions, setOptions, options, optName]);

  if (planetsWithAllFilters.length === 0) {
    return <p>Loading</p>;
  }

  let tableHeadValues = {};
  tableHeadValues = Object.keys(planetsWithAllFilters[0]);
  const elemIndex = 9;
  tableHeadValues.splice(elemIndex, 1);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOrder = ({ target: { name, value } }) => {
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSort = () => {
    if (shouldSort) {
      sortFunc(planetsWithAllFilters, order);
      setShouldSort(false);
    }
  };

  const handleClearFilter = ({ target: { name } }) => {
    const button = document.getElementById(name);
    button.hidden = true;
    setShouldReloadOptions(true);
    setOptName(name);
    setDeletedFilter(name);
    setLoadFilters(true);
  };

  const createButton = () => {
    const opt = state.column;
    return (
      <div data-testid="filter" key={ filters.length } id={ opt }>
        <button onClick={ handleClearFilter } name={ opt } type="button">x</button>
        {` ${opt} ${state.comparison} ${state.filterValue}`}
      </div>);
  };

  const handleClick = () => {
    const opt = state.column;
    if (opt) {
      setNumericFilters([...numericFilters, state]);
      const optionDisabled = options.indexOf(opt);
      options.splice(optionDisabled, 1);
      setOptions(options);
      setState({
        column: options[0],
        comparison: 'maior que',
        filterValue: '0',

      });
      const div = document.getElementById(opt);
      if (div === null) {
        setFilters(filters.concat(createButton()));
      } else {
        div.hidden = false;
      }
      setLoadFilters(true);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name-filter">
          Filtrar por nome:
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            onChange={ ({ target: { value } }) => { setNameFiltered(value); } }
          />
        </label>
      </div>
      <div>
        <label htmlFor="column">
          Filtrar por valores numéricos:
          <select
            value={ state.column }
            onChange={ handleChange }
            data-testid="column-filter"
            name="column"
            id="column"
          >
            {options.map((column, index) => (
              <option
                key={ `${column}${index}` }
                name={ column }
                value={ column }
              >
                {column}
              </option>))}
          </select>
        </label>
        <select
          value={ state.comparison }
          onChange={ handleChange }
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          value={ state.filterValue }
          onChange={ handleChange }
          data-testid="value-filter"
          name="filterValue"
          type="number"
        />
        <button
          onClick={ handleClick }
          data-testid="button-filter"
          type="button"
        >
          Aplicar filtros
        </button>
      </div>
      <div>
        Ordenar por:
        <select
          value={ order.column }
          onChange={ handleOrder }
          data-testid="column-sort"
          name="column"
          id=""
        >
          {tableHeadValues.map((key) => <option value={ key } key={ key }>{key}</option>)}
        </select>
        <label htmlFor="asc">
          ASC
          <input
            onChange={ handleOrder }
            id="asc"
            name="sort"
            data-testid="column-sort-input-asc"
            value="ASC"
            type="radio"
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            onChange={ handleOrder }
            id="desc"
            name="sort"
            data-testid="column-sort-input-desc"
            value="DESC"
            type="radio"
          />
        </label>
        <button
          onClick={ () => setShouldSort(true) }
          data-testid="column-sort-button"
          type="button"
        >
          Ordenar
        </button>
      </div>
      <div id="filters">
        <p>Filtros ativos:</p>
        {filters}
      </div>
      <table>
        <tbody>
          <tr>
            {tableHeadValues.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {notFound ? <p>Elemento não encontrado</p>
            : (
              handleSort(),
              planetsWithAllFilters
                .map((planet, index) => <TableRow key={ index } info={ planet } />))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
