const TASK_COUNT = 20;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const DESCRIPTION_LIST = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const STATUS_COLOR = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`,
};
const STATUS_COLORS = Object.values(STATUS_COLOR);

const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};
const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
const DAYS_OF_THE_WEEK = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const SortType = {
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
  DEFAULT: `default`,
};
const FilterType = {
  ALL: `all`,
  ARCHIVE: `archive`,
  FAVORITES: `favorites`,
  OVERDUE: `overdue`,
  REPEATING: `repeating`,
  TODAY: `today`,
};

export {
  TASK_COUNT, DESCRIPTION_LIST, STATUS_COLORS,
  DefaultRepeatingDays, MONTH_NAMES, DAYS_OF_THE_WEEK,
  SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON, SortType,
  FilterType
};
