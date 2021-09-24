import React from 'react';
import PropTypes from 'prop-types';

export default function FilterList({ dispatch, filters: { filterByNumericValues } }) {
  const dispatchDelete = (payload) => {
    dispatch({
      type: 'remove-filter',
      payload,
    });
  };

  const renderFilter = (filter, index) => (
    <div key={ index } data-testid="filter">
      <p>{filter.column}</p>
      <p>{filter.comparison}</p>
      <p>{filter.value}</p>
      <button
        type="button"
        onClick={ () => dispatchDelete(filter) }
      >
        X
      </button>
    </div>
  );
  const renderFilterList = (filterList, index) => (
    <div>
      {filterList
        && filterList
          .map((filter) => renderFilter(filter, index))}
    </div>
  );

  return renderFilterList(filterByNumericValues);
}

FilterList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    filterByName: PropTypes.objectOf(PropTypes.string),
    filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
    order: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
