import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';
import TableRow from './TableRow';

const Table = () => {
  const initialState = {
    column: 'population',
    comparison: 'maior que',
    filterValue: '0',
  };
  const [state, setState] = useState(initialState);
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

  let keys = {};
  if (planetsWithAllFilters.length === 0) {
    return <p>Loading</p>;
  }
  keys = Object.keys(planetsWithAllFilters[0]);
  const elemIndex = 9;
  keys.splice(elemIndex, 1);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClearFilter = ({ target: { name } }) => {
    const button = document.getElementById(name);
    button.hidden = true;
    setShouldReloadOptions(true);
    setOptName(name);
    setLoadFilters(true);
    setDeletedFilter(name);
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
            {/* <option name="population" value="population">population</option>
        <option name="orbital_period" value="orbital_period">orbital_period</option>
        <option name="diameter" value="diameter">diameter</option>
        <option name="rotation_period" value="rotation_period">rotation_period</option>
        <option name="surface_water" value="surface_water">surface_water</option> */}
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
      <div id="filters">
        <p>Filtros ativos:</p>
        {filters}
      </div>
      <table>
        <tbody>
          <tr>
            {keys.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {notFound ? <p>Elemento não encontrado</p>
            : planetsWithAllFilters.map((planet, index) => (
              <TableRow key={ index } info={ planet } />))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
