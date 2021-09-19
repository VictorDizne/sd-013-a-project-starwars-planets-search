import { useEffect } from 'react';

const useFilter = (func) => useEffect(func, []);

export default useFilter;
