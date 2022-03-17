export const generate = (): MathData => {
  return {
    math: {
      tan: "-1.4214488238747245",
      sin: "0.8178819121159085",
      cos: "-0.5753861119575491",
    },
  };
};

export interface MathData {
  math: {
    tan: string;
    sin: string;
    cos: string;
  };
}
