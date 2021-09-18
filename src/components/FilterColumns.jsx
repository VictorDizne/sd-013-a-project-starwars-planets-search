import React, { useContext } from 'react';
import StarWarsContext from '../context';

const FilterColumns = () => {
  const arrColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const arrComparisonFilters = ['maior que', 'menor que', 'igual a'];

  // const [columnSelected, setColumnSelected] = useState('');
  // const [comparison, setComparison] = useState('');
  // const [number, setNumber] = useState('');

  const { filterByNumerics } = useContext(StarWarsContext);

  const handleClick = () => {
    const selectFromColumns = document.getElementById('selectForColumns');
    const optionFromColumns = selectFromColumns.options[
      selectFromColumns.selectedIndex
    ].value;
    // setColumnSelected(optionFromColumns.value); // Posso chamar uma função que receberá esse valor como param

    const selectFromComparison = document.getElementById('selectForComparison');
    const optionFromComparison = selectFromComparison.options[
      selectFromComparison.selectedIndex
    ].value;

    // setComparison(optionFromComparison.value); // Posso chamar uma função que receberá esse valor como param

    const numberFromInput = document.getElementById('numberForFilter').value; // Posso chamar uma função que receberá esse valor como param

    filterByNumerics(optionFromColumns, optionFromComparison, numberFromInput);

    // const filterByNumerics = (column, comparison, numCriteria) => {
    //   const filteredDataByNumerics = saveResultsClone.filter((planet) => {
    //     if (comparison === 'maior que') {
    //       return (Number(planet[column]) > Number(numCriteria));
    //     } if (comparison === 'menor que') {
    //       return (Number(planet[column]) < Number(numCriteria));
    //     } if (comparison === 'igual a') {
    //       return (Number(planet[column]) === Number(numCriteria));
    //     }
    //     return false;
    //   });
    //   setState({ ...state, data: filteredDataByNumerics });
    // };
  };

  return (
    <div>
      <label htmlFor="select-columns">
        Select column:
        <select data-testid="column-filter" name="select-columns" id="selectForColumns">
          {
            arrColumns.map(
              (column) => <option key={ column } value={ column }>{column}</option>,
            )
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison options:
        <select
          data-testid="comparison-filter"
          id="selectForComparison"
          name="comparison-filter"
        >
          {
            arrComparisonFilters.map(
              (criteria) => (
                <option
                  key={ criteria }
                  value={ criteria }
                >
                  {criteria}
                </option>),
            )
          }
        </select>
      </label>
      <label htmlFor="input-number">
        Input number:
        <input
          data-testid="value-filter"
          id="numberForFilter"
          name="input-number"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        onClick={ handleClick }
        type="button"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterColumns;
