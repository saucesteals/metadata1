export const generate = (): CapabilitiesData => {
  return {
    capabilities: {
      css: {
        textShadow: 1,
        WebkitTextStroke: 1,
        boxShadow: 1,
        borderRadius: 1,
        borderImage: 1,
        opacity: 1,
        transform: 1,
        transition: 1,
      },
      js: {
        audio: true,
        geolocation: true,
        localStorage: "supported",
        touch: false,
        video: true,
        webWorker: true,
      },
      elapsed: 0,
    },
  };
};

export interface CapabilitiesData {
  capabilities: {
    css: {
      textShadow?: 1;
      WebkitTextStroke?: 1;
      boxShadow?: 1;
      borderRadius?: 1;
      borderImage?: 1;
      opacity?: 1;
      transform?: 1;
      transition?: 1;
    };
    js: {
      audio: boolean;
      geolocation: boolean;
      localStorage: "supported" | "unsupported" | "disabled";
      touch: boolean;
      video: boolean;
      webWorker: boolean;
    };
    elapsed: number;
  };
}
