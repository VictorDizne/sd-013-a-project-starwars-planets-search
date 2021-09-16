import React, { useContext } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const {
    data: { results },
  } = useContext(Context);

  // useEffect(() => {}, []); ComponentDidMount
  if (!results) return <div className="loading">carregando</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr>
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
