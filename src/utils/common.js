import moment from 'moment';

function getRandomInteger(min, max) {
  let number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

function getRandomEl(array) {
  let el = Math.floor(Math.random() * array.length);
  return array[el];
}

const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomInteger(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

export {
  getRandomInteger,
  getRandomEl,
  formatTime,
  getRandomDate,
  formatDate,
};
