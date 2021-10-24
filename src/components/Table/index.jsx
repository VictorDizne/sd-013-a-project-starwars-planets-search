import React, { useContext } from 'react';
import styles from './styles.module.css';
import MyContext from '../../context/MyContext';
import Planets from '../Planets';

function Table() {
  const { planets, planetsKeys } = useContext(MyContext);

  return (
    <div className={ styles.tableContainer }>
      <table className={ styles.table } />
      <thead className={ styles.tableHead }>
        <tr className={ styles.tableRow }>
          {planetsKeys.map((key) => (
            <th key={ key } name={ key }>{key}</th>
          ))}
        </tr>
        <tbody>
          {' '}
          className=
          {styles.tableBody}
          <Planets planets={ planets } />
        </tbody>

      </thead>
    </div>
  );
}

export default Table;
