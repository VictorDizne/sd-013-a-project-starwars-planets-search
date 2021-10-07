import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import starWarsFetchPlanets from '../services/starWarsFetchAPI';
import PropTypes from 'prop-types';

// children vem por props por isso precisa colocar PropTypes
function PlanetsProvider({ children }) {
// jogar todas as funcoes e estado que vamos utilizar na aplicacao
const [data, setData] = useState([]);

    useEffect(() => {
        /* console.log(starWarsFetchPlanets()); */
        const fetchRequest = async () => {
        setData(await starWarsFetchPlanets());
        }
        fetchRequest();
     }, [])

const planetValue ={
    data, 
};

    return (
        /* aqui o provider declara que as children que estao envolvidas no app passa a ter acesso ao objeto value que esta no arquivo context - chamando o useContext() nos componentes */
        <PlanetsContext.Provider value={ planetValue }>
            {children}
        </PlanetsContext.Provider>
    )
}

PlanetsProvider.propTypes = {
    children: PropTypes.node,
}

export default PlanetsProvider;