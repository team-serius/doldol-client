import * as dayjs from 'dayjs';

export const convertDateToDateString = (date: dayjs.Dayjs | null, format?: string) => {
  if (!date) return '';
  return dayjs(date)
    .format(format ?? 'YY.MM.DD')
    .toString();
};

export const convertDateStringToFormattedDateString = (string: string, format?: string) => {
  if (!string) return '';
  return dayjs(string)
    .format(format ?? 'YYYY-MM-DD')
    .toString();
};

export const convertPeriodToString = (startAt?: Date | null, endAt?: Date | null) => {
  if (!startAt && !endAt) return '기한 없음';

  const startDateStr = startAt ? dayjs(startAt).format('YYYY-MM-DD') : '';
  const endDateStr = endAt ? dayjs(endAt).format('YYYY-MM-DD') : '';

  return `${startDateStr} ~ ${endDateStr}`;
};

export const getDateDistanceTextFromToday = (date?: Date) => {
  if (!date) return '기한 없음';

  const today = new Date();
  const distance = -dayjs(date).diff(today, 'day');
  return `${Math.abs(distance)}일 ${distance >= 0 ? '지남' : '남음'}`;
};

export const isExpired = (date?: Date) => {
  if (!date) return '기한 없음';
  const today = new Date();
  const distance = -dayjs(date).diff(today, 'day');
  return distance >= 0 ? '만료됨' : '';
};
