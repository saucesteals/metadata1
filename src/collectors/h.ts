import crypto from "crypto";

export const generate = (): HData => {
  return {
    history: {
      length: crypto.randomInt(5, 15),
    },
  };
};

export interface HData {
  history: { length: number };
}
