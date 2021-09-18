import React, { useContext, useState } from 'react';
import planetContext from '../context/planetContext';
import TableRow from './TableRow';

const Table = () => {
  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    filterValue: '0',
  });
  const {
    data,
    setNameFiltered,
    setNumericFilters,
    options,
    setOptions,
    notFound,
  } = useContext(planetContext);
  let keys = {};
  if (data.length === 0) {
    return <p>Loading</p>;
  }
  keys = Object.keys(data[0]);
  const elemIndex = 9;
  keys.splice(elemIndex, 1);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = () => {
    setNumericFilters(state);
    const opt = state.column;
    // const select = document.getElementById('column');
    // select.remove(opt);
    let optionDisabled = options.indexOf(opt);
    const magicNumber = -1;
    if (optionDisabled === magicNumber) optionDisabled = 0;
    options.splice(optionDisabled, 1);
    setOptions(options);
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
            {options.map((column) => (
              <option
                key={ column }
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
      <table>
        <tbody>
          <tr>
            {keys.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {notFound ? <p>Elemento não encontrado</p>
            : data.map((dado, index) => <TableRow key={ index } info={ dado } />)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
