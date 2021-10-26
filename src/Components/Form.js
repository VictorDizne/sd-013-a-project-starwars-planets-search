import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/myContext';
import Input from './Input';

export default function Form() {
  const {
    setWichColumn,
    stateFiltered,
    setStateFiltered,
    reset,
  } = useContext(myContext);

  const [options, setOptions] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);
  const [optionsPadrao, setOptionsPadrao] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);
  const [formState, setFormState] = useState({
    filterByName: {
      name: '',
    },
    formByNumericValues:
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
  });

  useEffect(() => {
    if (reset) {
      setOptions([
        'population',
        'diameter',
        'orbital_period',
        'rotation_period',
        'surface_water',
      ]);
    }
  }, [reset]);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
    case 'planet':
      return setStateFiltered({
        ...stateFiltered,
        filter: {
          ...stateFiltered.filter,
          filterByName: { name: value },
        },
      });
    case 'columm':
      return setFormState({
        ...formState,
        formByNumericValues: { ...formState.formByNumericValues, column: value } });
    case 'quantity':
      return setFormState({
        ...formState,
        formByNumericValues: { ...formState.formByNumericValues, comparison: value } });
    case 'number':
      return setFormState({
        ...formState,
        formByNumericValues: { ...formState.formByNumericValues, value } });
    default:
      break;
    }
  };

  const handleClick = () => {
    const { formByNumericValues: { column } } = formState;
    setWichColumn(column);
    setStateFiltered({
      ...stateFiltered,
      filter: { ...stateFiltered.filter,
        filterByNumericValues: [...stateFiltered.filter.filterByNumericValues,
          formState.formByNumericValues] },
    });
    const novasOptions = options.filter((option) => option !== column);
    setOptions(novasOptions);
  };

  const wichOptions = reset ? optionsPadrao : options;

  return (
    <div>
      <Input
        onChange={ handleChange }
        dataId="name-filter"
        name="planet"
        type="text"
      />
      <label htmlFor="columm">
        Choose a columm:
        <select onChange={ handleChange } data-testid="column-filter" name="columm">
          {wichOptions.map((option, i) => <option key={ i }>{option}</option>)}
          {/*   <option>population</option>
          <option>diameter</option>
          <option>orbital_period</option>
          <option>rotation_period</option>
          <option>surface_water</option> */}
        </select>
      </label>
      <select onChange={ handleChange } data-testid="comparison-filter" name="quantity">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <Input
        onChange={ handleChange }
        dataId="value-filter"
        name="number"
        type="number"
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}
