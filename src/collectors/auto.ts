export const generate = (): AutoData => {
  return {
    automation: {
      phantom: { properties: { window: [] } },
      wd: { properties: { document: [], navigator: [], window: [] } },
    },
  };
};

export interface AutoData {
  automation: {
    wd: {
      properties: {
        document: true[];
        window: true[];
        navigator: true[];
      };
    };
    phantom: { properties: { window: true[] } };
  };
}
