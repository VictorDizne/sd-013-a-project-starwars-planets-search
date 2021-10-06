import React, { useState, useEffect } from 'react';
import starWarsFetchPlanets from '../services/starWarsFetchAPI';

function Table() {
    const [planets, setPlanets] = useState([]);
/* como altera = setPlanets, quem coloco dentro? planets */
   /* preciso realizar uma acao para renderizar o fetch */
   useEffect(() => {
       setPlanets(starWarsFetchPlanets())
   }, [])
Zoom
    return (
        <div>
            <table>
                <thead>
                {/* header da tabela */}
                </thead>
                <tbody>
                {/* infos de tabela em => https://www.w3schools.com/tags/tag_th.asp */}
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
