import {getRandomInteger} from '../utils/common.js';

const filterNames = [`all`, `overdue`, `today`, `favourites`, `repeating`, `archive`];

export const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      name: filterName,
      count: ` ` + getRandomInteger(0, 9),
    };
  });
};
