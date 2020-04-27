import {getRandomInteger} from '../utils/utils.js';

const filterNames = [`all`, `overdue`, `today`, `favourites`, `repeating`, `archive`];

export const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      name: filterName,
      count: ` ` + getRandomInteger(0, 9),
    };
  });
};
