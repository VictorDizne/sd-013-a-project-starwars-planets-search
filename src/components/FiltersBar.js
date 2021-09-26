import React, { useContext, useState, useEffect } from 'react';
import { Input, Select, Button } from '.';
import Context from '../context/Context';

function FiltersBar() {
  const { filters: { filterByNumericValues }, setFilters } = useContext(Context);
  const comparisonOpt = ['maior que', 'menor que', 'igual a'];
  const columnsList = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [columnsOpt, setColumnsOpt] = useState(columnsList);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let newListOpt;
      filterByNumericValues.forEach(({ column }) => {
        newListOpt = columnsList.filter((item) => item !== column);
      });
      setColumnsOpt(newListOpt);
    }
  }, [filterByNumericValues]);

  function nameChange({ target: { value } }) {
    setFilters((state) => ({
      ...state,
      filterByName: { name: value },
    }));
  }

  function searchClick() {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const inputValue = document.getElementById('value').value;

    const newObj = { column, comparison, value: inputValue };
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues, newObj],
    }));
  }

  // function renderFiltersBtn() {
  //   if (filterByNumericValues > 0) {
  //     return (filterByNumericValues.map(filter => (
  //       <div>
  //         <Button
  //           name={`${filter.column} ${filter.comparison} ${filter.value} X`}
  //           test=""
  //         />
  //       </div>))
  //     );
  //   }
  // }

  return (
    <div>
      <Input
        type="text"
        onChange={ nameChange }
        test="name-filter"
        name="Search"
      />
      <div>
        <Select
          name="column"
          test="column-filter"
          options={ columnsOpt }
        />
        <Select
          name="comparison"
          test="comparison-filter"
          options={ comparisonOpt }
        />
        <Input
          type="number"
          name="value"
          test="value-filter"
        />
        <Button
          name="Send"
          onClick={ searchClick }
          test="button-filter"
        />
      </div>
      {/* <div>
        {renderFiltersBtn()}
      </div> */}
    </div>
  );
}

export default FiltersBar;
