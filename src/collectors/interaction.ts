export const generate = (): InteractionData => {
  return {
    interaction: {
      clicks: 0,
      touches: 0,
      keyPresses: 0,
      cuts: 0,
      copies: 0,
      pastes: 0,
      keyPressTimeIntervals: [],
      mouseClickPositions: [],
      keyCycles: [],
      mouseCycles: [],
      touchCycles: [],
    },
  };
};

export interface InteractionData {
  interaction: {
    clicks: number;
    touches: number;
    keyPresses: number;
    cuts: number;
    copies: number;
    pastes: number;
    keyPressTimeIntervals: number[];
    mouseClickPositions: string[];
    keyCycles: number[];
    mouseCycles: number[];
    touchCycles: number[];
  };
}
