export const generate = (): PowData => {
  return {
    token: {
      isCompatible: true,
      pageHasCaptcha: 0,
    },
  };
};

export interface PowData {
  token: { isCompatible: boolean; pageHasCaptcha: 1 | 0 };
}
