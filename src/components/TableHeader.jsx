import React from 'react';
import FilterNumber from './FilterNumber';
import InputSearch from './InputSearch';
import '../css/TableHeader.css';

const TableHeader = () => (
  <div className="countainerHeader">
    <InputSearch />
    <FilterNumber />
  </div>
);

export default TableHeader;
