import React, { useContext, useState } from 'react';
import planetContext from '../context/planetContext';
import TableRow from './TableRow';

const Table = () => {
  const [state, setState] = useState({
    column: 'population',
    comparison: 'bigger',
    filterValue: '0',
  })
  const { data, setNameFiltered, setNumericFilters, options, setOptions } = useContext(planetContext);
  let keys = {};
  if (data.length === 0) {
    return <p>Loading</p>;
  }
  keys = Object.keys(data[0]);
  keys.splice(9, 1);

  const handleChange = ({target: {name, value}}) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleClick = () => {
    setNumericFilters(state);
    const opt = state.column;
    // const select = document.getElementById('column');
    // select.remove(opt);
    let optionDisabled = options.indexOf(opt);
    if (optionDisabled === -1) optionDisabled = 0;
    options.splice(optionDisabled, 1);
    setOptions(options);
  }

  return (
    <div>
      <div>
      <label htmlFor="">Filtrar por nome: </label>
      <input data-testid="name-filter" type="text" onChange={ ({ target: { value } }) => { setNameFiltered(value); } } />
      </div>
      <div>
        <label htmlFor="">Filtrar por valores numéricos: </label>
        <select value={state.column} onChange={handleChange} data-testid='column-filter' name="column" id="column">
          {options.map((column) => <option key={column} name={column} value={column}>{column}</option>)}
        {/* <option name="population" value="population">population</option>
        <option name="orbital_period" value="orbital_period">orbital_period</option>
        <option name="diameter" value="diameter">diameter</option>
        <option name="rotation_period" value="rotation_period">rotation_period</option>
        <option name="surface_water" value="surface_water">surface_water</option> */}
      </select>
      <select value={state.comparison} onChange={handleChange} data-testid='comparison-filter' name="comparison" id="comparison">
        <option value="bigger">maior que</option>
        <option value="smaller">menor que</option>
        <option value="equal">igual a</option>
      </select>
      <input value={state.filterValue} onChange={handleChange} data-testid='value-filter' name="filterValue" type="number" />
      <button onClick={handleClick} data-testid='button-filter' type="button">Aplicar filtros</button>
      </div>
      <table>
        <tbody>
          <tr>
            {keys.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {data.map((dado, index) => <TableRow key={ index } info={ dado } />)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
