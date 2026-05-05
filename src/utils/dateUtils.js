// Date Utils
export const DateUtils = {
  format: (date, formatStr = 'YYYY-MM-DD') => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  },
  isPast: (date) => {
    return new Date(date) < new Date();
  }
};
