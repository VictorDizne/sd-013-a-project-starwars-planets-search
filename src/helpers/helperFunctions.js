const NUMBER_ONE = 1;
const NEGATIVE_NUMBER_ONE = -1;

const sortAscendedOrderLogic = (array, order) => (
  array.sort((a, b) => {
    if (Number.isNaN(parseFloat(a[order]))) {
      if (a[order] > b[order]) {
        return NUMBER_ONE;
      }
      if (a[order] < b[order]) {
        return NEGATIVE_NUMBER_ONE;
      }
      return 0;
    }
    return Number(a[order]) - Number(b[order]);
  })
);

const sortDescendedOrderLogic = (array, order) => (
  array.sort((a, b) => {
    if (Number.isNaN(parseFloat(a[order]))) {
      if (a[order] > b[order]) {
        return NEGATIVE_NUMBER_ONE;
      }
      if (a[order] < b[order]) {
        return NUMBER_ONE;
      }
      return 0;
    }
    return Number(b[order]) - Number(a[order]);
  })
);

const sortPlanets = (array, order, sort) => {
  if (sort === 'ASC') {
    return sortAscendedOrderLogic(array, order);
  }
  return sortDescendedOrderLogic(array, order);
};

export default sortPlanets;
