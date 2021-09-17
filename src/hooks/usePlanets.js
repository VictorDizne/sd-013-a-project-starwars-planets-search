// React
import { useContext } from 'react';

// Context
import { Planets } from '../context/Planets';

const usePlanets = () => {
  const { data, setData } = useContext(Planets);
  return { data, setData };
};

export default usePlanets;
