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

export const toCapitalize = (word) =>
  `${word?.charAt(0).toUpperCase()}${word?.slice(1)}`;

export const getConversationName = (user, users) =>
  users[0]?._id === user?.id ? users[1]?.name : users[0]?.name;

export const getConversationPicture = (user, users) =>
  users[0]?._id === user?.id ? users[1]?.picture?.url : users[0]?.picture?.url;

export const getConversationId = (user, users) =>
  users[0]?._id !== user?._id ? users[1]?._id : users[0]?._id;

export const getFileType = (mimeType) => {
  switch (mimeType) {
    case 'text/plain':
      return 'TXT';
    case 'application/pdf':
      return 'PDF';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'DOCX';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPTX';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLSX';
    case 'application/vnd.rar':
      return 'RAR';
    case 'application/zip':
      return 'ZIP';
    case 'audio/mpeg':
    case 'audio/wav':
      return 'AUDIO';
    case 'video/mp4':
    case 'video/webm':
    case 'video/mpeg':
      return 'VIDEO';

    default:
      return 'IMAGE';
  }
};
