import React from 'react';

import { allLegends } from '../consts';

export default function TableLegend() {
  return (
    <thead>
      <tr>{ allLegends.map((element) => (<th key={ element }>{element}</th>)) }</tr>
    </thead>
  );
}
