import {TASK_COUNT} from './const.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from './utils/render.js';
import {generateFilters} from './mock/filter.js';
import BoardComponent from './components/board.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import BoardController from './controllers/board.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
