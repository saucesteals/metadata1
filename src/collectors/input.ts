export const generate = (): InputData => {
  return {
    form: {
      "ap-credential-autofill-hint": {
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
        width: 0,
        height: 0,
        totalFocusTime: 0,
        checksum: "",
        autocomplete: false,
        prefilled: true,
      },
      password: {
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
        width: 296,
        height: 31,
        totalFocusTime: 0,
        autocomplete: false,
        prefilled: true,
      },
    },
  };
};

export interface InputData {
  form: {
    [key: string]: {
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
      width: number;
      height: number;
      totalFocusTime: number;
      checksum?: string;
      autocomplete?: boolean;
      prefilled: boolean;
    };
  };
}
