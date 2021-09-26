import React, { useState } from 'react';
import BodyDropdownTable from '../components/BodyDropdownTable';
import BodyPlanetsTable from '../components/BodyPlanetsTable';
import HeaderPlanetsTable from '../components/HeaderPlanetsTable';
import SearchInput from '../components/SearchInput';
import SelectInputs from '../components/SelectInputs';
import SearchNameContext from '../contextAPI/SearchNameContext';

function PlanetsTable() {
  const [filtersDrop, setFiltersDrop] = useState({});
  const [filterSelected, setFilterSelected] = useState(false);
  const [filterValue, setFilterValue] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  const planetByName = (value) => {
    setFilterValue({
      filters: {
        ...filterValue.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const filterByDropdown = (filters, key) => {
    setFiltersDrop(filters);
    setFilterSelected(key);
    setFilterValue({
      filters: {
        ...filterValue.filters,
        filterByNumericValues: [
          ...filterValue.filters.filterByNumericValues,
          {
            column: filters.selectColumn,
            comparison: filters.selectComparison,
            value: filters.inputNumber,
          },
        ],
      },
    });
  };

  return (
    <section>
      <SearchInput
        handleCallBack={ planetByName }
      />
      <SelectInputs
        receiveInformation={ filterByDropdown }
      />
      <table>
        <HeaderPlanetsTable />
        <SearchNameContext.Provider value={ filterValue }>
          {filterSelected ? (
            <BodyDropdownTable filters={ filtersDrop } filtersSelected={ filterValue } />
          ) : (
            <BodyPlanetsTable />
          )}
        </SearchNameContext.Provider>

      </table>
    </section>
  );
}

export default PlanetsTable;
