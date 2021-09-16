import { createContext } from 'react';

const TableContext = createContext({
  data: [],
  loading: false,
  error: null,
});

export default TableContext;
