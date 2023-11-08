export const getSearchStartDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);

  return currentDate.toISOString().slice(0, 10);
};

export const getTodayDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth());

  return currentDate.toISOString().slice(0, 10);
};
