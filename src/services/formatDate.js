const formatDate = (date) => {
  const position = 2;
  const d = new Date(date);
  const month = `0${d.getMonth() + 1}`.slice(-position);
  const day = `0${d.getDate()}`.slice(-position);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export default formatDate;
