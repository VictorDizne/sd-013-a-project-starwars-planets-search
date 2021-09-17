import React from 'react';
import TableContext from '../utils/TableContext';
import FilterContext from '../utils/FilterContext';

export function useTable() {
  return React.useContext(TableContext);
}

export function useFilter() {
  return React.useContext(FilterContext);
}
