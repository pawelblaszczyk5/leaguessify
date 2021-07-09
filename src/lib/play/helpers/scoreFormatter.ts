const formatter = new Intl.NumberFormat('us-US');

export const formatScore = (score: number): string => formatter.format(score);
