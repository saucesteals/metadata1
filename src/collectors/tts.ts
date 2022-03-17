import crypto from "crypto";
export const generate = (): TTSData => {
  return {
    timeToSubmit: crypto.randomInt(11000, 12500),
  };
};

export interface TTSData {
  timeToSubmit: number;
}
