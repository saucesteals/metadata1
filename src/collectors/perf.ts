import { CollectorData } from "../types/collectors";

export const generate = (data: CollectorData): PerfData => {
  return {
    performance: {
      timing: {
        connectStart: data.start - 1882,
        navigationStart: data.start - 1885,
        loadEventEnd: data.start - 414,
        domLoading: data.start - 864,
        secureConnectionStart: data.start - 1800,
        fetchStart: data.start - 1872,
        domContentLoadedEventStart: data.start - 548,
        responseStart: data.start - 892,
        responseEnd: data.start - 835,
        domInteractive: data.start - 548,
        domainLookupEnd: data.start - 1822,
        redirectStart: 0,
        requestStart: data.start - 1767,
        unloadEventEnd: data.start - 880,
        unloadEventStart: data.start - 884,
        domComplete: data.start - 422,
        domainLookupStart: data.start - 1882,
        loadEventStart: data.start - 422,
        domContentLoadedEventEnd: data.start - 548,
        redirectEnd: 0,
        connectEnd: data.start - 1767,
      },
    },
  };
};

export interface PerfData {
  performance: {
    timing: {
      connectStart: number;
      navigationStart: number;
      loadEventEnd: number;
      domLoading: number;
      secureConnectionStart: number;
      fetchStart: number;
      domContentLoadedEventStart: number;
      responseStart: number;
      responseEnd: number;
      domInteractive: number;
      domainLookupEnd: number;
      redirectStart: number;
      requestStart: number;
      unloadEventEnd: number;
      unloadEventStart: number;
      domComplete: number;
      domainLookupStart: number;
      loadEventStart: number;
      domContentLoadedEventEnd: number;
      redirectEnd: number;
      connectEnd: number;
    };
  };
}
