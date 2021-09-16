import { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

const usePlanetsContext = () => useContext(PlanetsContext);

export default usePlanetsContext;
