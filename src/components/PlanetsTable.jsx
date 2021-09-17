import React from 'react';
import BodyPlanetsTable from './BodyPlanetsTable';
import HeaderPlanetsTable from './HeaderPlanetsTable';

function PlanetsTable() {
  return (
    <table>
      <HeaderPlanetsTable />
      <BodyPlanetsTable />
    </table>
  );
}

export default PlanetsTable;
