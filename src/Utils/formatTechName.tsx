export const formatTechName = (tech: string) => {
  return tech.toLowerCase().replace(/[ .]|js$/g, '');
};
