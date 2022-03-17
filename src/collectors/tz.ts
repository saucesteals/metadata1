export const generate = (): TZData => {
  return {
    timeZone: -8,
  };
};

export interface TZData {
  timeZone: number;
}
