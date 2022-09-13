import moment, { MomentInput } from 'moment';

export const DateFormat = {
  dateUIFormat: 'DD/MM/YYYY',
  monthUIFormat: 'MMM YYYY',
  monthUIFormatNumber: 'MM/YYYY',
  dateTimeUIFormat: 'DD/MM/YYYY HH:mm',
  serverDateFormat: 'YYYY-MM-DD',
  yearUI: 'YYYY',
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 12/03/2021
 */
export const formatServerDateToUIDateFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.dateUIFormat);
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: March 2021
 */
export const formatServerDateToUIMonthFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.monthUIFormat);
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 03th March 2021
 */
export const formatServerDateToUIDayOrdinal = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  const date = new Date(serverDate);
  return `${date.getDate()}th ${formatServerDateToUIMonthFormat(serverDate)}`;
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 12/03/2021 8:00
 */
export const formatServerDateToUIDateTimeFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.dateTimeUIFormat);
};

export const formatServerDateToMonthUIFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.monthUIFormat);
};

export const getMonth = (value?: string) => {
  if (!value) {
    return 0;
  }

  return moment(value).month();
};

export const getYear = (value?: string) => {
  if (!value) {
    return 0;
  }

  return moment(value).year();
};

export const getDaysArray = (year: number, month: number) => {
  const monthIndex = month; // 0..11 instead of 1..12
  const names = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const date = new Date(year, monthIndex, 1);
  const result = [];

  while (date.getMonth() === monthIndex) {
    result.push({
      day: date.getDate(),
      name: names[date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const getAvailableTime = (
  from: MomentInput,
  to: MomentInput,
  minuteOffset?: number,
  disable: boolean = false
): any[] => {
  let start = moment(from, 'hh:mm');
  let end = moment(to, 'hh:mm');
  start.minutes(Math.ceil(start.minutes() / 15) * 15);
  let result: Array<any> = [];
  let current = moment(start);
  while (current <= end) {
    result.push({ time: current.format('HH:mm'), disable: disable });
    current.add(minuteOffset !== undefined ? minuteOffset : 15, 'minutes');
  }
  return result;
};
