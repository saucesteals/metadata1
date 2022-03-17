export const generate = (): CanvasData => {
  return {
    canvas: {
      hash: 0,
      emailHash: null,
      histogramBins: [],
    },
  };
};

export interface CanvasData {
  canvas: {
    hash: number;
    emailHash: number | null;
    histogramBins: number[];
  };
}
