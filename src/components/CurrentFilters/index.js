import React, { useContext } from 'react';
// import styled from 'styled-components';

import DeleteButton from './DeleteButton';

import AppContext from '../../contexts/AppContext';

// const StyledDiv = styled.div`
//   display: flex;
//   div {
//     margin: 10px;
//     border: 1px solid black;
//   }
// `;

const Filters = () => {
  const {
    numericFilters,
  } = useContext(AppContext);

  return (
    <div>
      { numericFilters.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          { Object.keys(filter).map((key) => (
            <p key={ key }>{ filter[key] }</p>
          )) }
          <DeleteButton filter={ filter } />
        </div>
      )) }
    </div>
  );
};

export default Filters;
