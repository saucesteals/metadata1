import { CollectorData } from "../types/collectors";

export const generate = (data: CollectorData): StartData => {
  return { start: data.start };
};

export interface StartData {
  start: number;
}
