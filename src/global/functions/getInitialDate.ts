const getInitialSearchDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);

  return currentDate.toISOString().slice(0, 10);
};
