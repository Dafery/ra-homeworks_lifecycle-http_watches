import dayjs from 'dayjs';

export const getUTCMilliseconds = (timezone: number) => {
  const offset = dayjs().utcOffset();
  return Date.now() + (timezone * 60 - offset) * 60 * 1000;
};
