const TASK_COUNT = 20;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const DESCRIPTION_LIST = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
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
const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

export {TASK_COUNT, DESCRIPTION_LIST, COLORS, DefaultRepeatingDays, MONTH_NAMES, DAYS, SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON};
