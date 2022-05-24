const normalizeString = (str: string): string => {
  const string = str.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, "").toLowerCase();

  return string;
};

export default normalizeString;
