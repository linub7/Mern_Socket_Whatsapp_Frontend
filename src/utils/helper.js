import moment from 'moment';

export const getImage = (picture) =>
  picture ? picture : require('assets/images/def-img.png');

export const dateHandler = (date) => {
  const now = moment();
  const momentDate = moment(date);
  const time = momentDate.fromNow(true);
  let dateByHourAndMinute = momentDate.format('HH:mm');

  const getDays = () => {
    const days = time.split(' ')[0];
    const convertedDays = Number(days);
    if (convertedDays < 8) {
      return now.subtract(convertedDays, 'days').format('dddd');
    } else {
      return momentDate.format('DD/MM/YYYY');
    }
  };

  if (time === 'a few seconds') {
    return 'Now';
  }

  if (time.search('minute') !== -1) {
    const mins = time.split(' ')[0];
    if (mins === 'a') {
      return '1 min';
    } else {
      return `${mins} min`;
    }
  }

  if (time.search('hour') !== -1) {
    return dateByHourAndMinute;
  }

  if (time === 'a day') {
    return 'Yesterday';
  }

  if (time.search('days') !== -1) {
    return getDays();
  }

  return time;
};

export const getReceiverId = (user, users) =>
  users[0]?._id === user?.id ? users[1]?._id : users[0]?._id;
