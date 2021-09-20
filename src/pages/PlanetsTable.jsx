import React, { useState } from 'react';
import BodyDropdownTable from '../components/BodyDropdownTable';
import BodyPlanetsTable from '../components/BodyPlanetsTable';
import HeaderPlanetsTable from '../components/HeaderPlanetsTable';
import SearchInput from '../components/SearchInput';
import SearchNameContext from '../contextAPI/SearchNameContext';

function PlanetsTable() {
  const [planetName, setPlanetName] = useState('');
  const [filtersDrop, setFiltersDrop] = useState({});
  const [filterSelected, setFilterSelected] = useState(false);

  const planetByName = (value) => {
    setPlanetName(value);
  };

  const filterByDropdown = (filters, key) => {
    setFiltersDrop(filters);
    setFilterSelected(key);
  };

  const filterValue = {
    filters: {
      filterByName: {
        name: planetName,
      },
    },
  };

  return (
    <section>
      <SearchInput
        handleCallBack={ planetByName }
        receiveInformation={ filterByDropdown }
      />
      <table>
        <HeaderPlanetsTable />
        {filterSelected ? (
          <BodyDropdownTable filters={ filtersDrop } />
        ) : (
          <SearchNameContext.Provider value={ filterValue }>
            <BodyPlanetsTable searchByName={ planetName } />
          </SearchNameContext.Provider>
        )}

      </table>
    </section>
  );
}

export default PlanetsTable;
