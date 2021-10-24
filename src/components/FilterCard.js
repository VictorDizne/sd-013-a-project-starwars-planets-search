import React, { useContext } from 'react';
import MyContext from '../context/Context';

export default function FilterCard({ comparison, column, value }) {
    const { setFilterNumeric, filterCard, setFilterCard, setData, listPlanets } = useContext(MyContext);

    function handleClick() {
        setFilterNumeric({
            column: '',
            value: 0,
            comparison: '',
        });
        setFilterCard([]);
        setData(listPlanets);
    }

    return (
        <div>
            <p>
                {comparison}
            </p>
            <p>
                {column}
            </p>
            <p>
                {value}
            </p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}