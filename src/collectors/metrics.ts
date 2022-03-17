export const generate = (): MetricsData => {
  return {
    metrics: {
      el: 0,
      script: 0,
      h: 0,
      batt: 0,
      perf: 0,
      auto: 0,
      tz: 0,
      fp2: 0,
      lsubid: 0,
      browser: 0,
      capabilities: 0,
      gpu: 0,
      dnt: 0,
      math: 0,
      tts: 0,
      input: 0,
      canvas: 0,
      captchainput: 0,
      pow: 0,
    },
  };
};

export interface MetricsData {
  metrics: {
    el: number;
    script: number;
    h: number;
    batt: number;
    perf: number;
    auto: number;
    tz: number;
    fp2: number;
    lsubid: number;
    browser: number;
    capabilities: number;
    gpu: number;
    dnt: number;
    math: number;
    tts: number;
    input: number;
    canvas: number;
    captchainput: number;
    pow: number;
  };
}
