import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/SWContext';

function HeaderPlanetsTable() {
  const { planets, isLoading } = useContext(PlanetsContext);

  return (
    <thead>
      <tr>
        {isLoading ? null
          : Object.keys(planets[0]).map((column, index) => (
            <th key={ index }>{ column }</th>))}
      </tr>
    </thead>
  );
}

export default HeaderPlanetsTable;
