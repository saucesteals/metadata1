export const generate = (): DNTData => {
  return {
    dnt: null,
  };
};

export interface DNTData {
  dnt: null | 1 | 0;
}
