// случайное число 1 до n
function getRandomInteger(min, max) {
  let number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

// случайный элнмент из массива
function getRandomEl(array) {
  let el = Math.floor(Math.random() * array.length);
  return array[el];
}

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomInteger(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export {getRandomInteger, getRandomEl, formatTime, getRandomDate, createElement, RenderPosition, render};
