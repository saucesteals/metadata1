import crypto from "crypto";

export const generate = (): EndData => {
  return {
    end: crypto.randomInt(20000, 30000),
  };
};

export interface EndData {
  end: number;
}
