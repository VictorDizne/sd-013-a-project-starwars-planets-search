import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const SearchBar = () => {
  const contexto = useContext(Context);
  const { data, setFilter, filter, setDataFiltered } = contexto;
  const opt2 = ['maior que', 'menor que', 'igual a'];
  const opt1 = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  // console.log(filter);
  // console.log(data);

  const handleMeasChange = ({ target }) => {
    const { name, value } = target;
    setFilter({
      ...filter,
      filterByMeasurments: {
        ...filter.filterByMeasurments,
        [name]: value },
    });
  };

  const handleSubmit = () => {
    const { filterByMeasurments: { column, comparison, value } } = filter;
    const objLiterals = {
      'maior que': (a, b) => Number(a) > Number(b),
      'menor que': (a, b) => Number(a) < Number(b),
      'igual a': (a, b) => Number(a) === Number(b),
    };

    const dataFilteredBy = data
      .filter((planet) => objLiterals[comparison](planet[column], value));
    setDataFiltered(dataFilteredBy);
  };

  useEffect(() => {
    const { filterByName: { name } } = filter;
    const dataFiltered = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    setDataFiltered(dataFiltered);
  }, [filter, data, setDataFiltered]);

  const handleNameChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filterByName:
      { name: value },
    });
  };

  return (
    <>
      <span>Filter by name: </span>
      <input
        // value={ name }
        onChange={ handleNameChange }
        data-testid="name-filter"
        type="text"
      />
      <br />

      <span>Filter by measurements: </span>
      <select name="column" onChange={ handleMeasChange } data-testid="column-filter">
        { opt1.map((opt, i) => <option key={ i }>{opt}</option>) }
      </select>
      <select
        name="comparison"
        onChange={ handleMeasChange }
        data-testid="comparison-filter"
      >
        { opt2.map((opt, i) => <option name={ opt } key={ i }>{opt}</option>) }
      </select>
      <input
        name="value"
        type="number"
        onChange={ handleMeasChange }
        className="value-filter"
        data-testid="value-filter"
      />

      <button onClick={ handleSubmit } type="button" data-testid="button-filter">
        FILT
      </button>
    </>
  );
};

export default SearchBar;
