export const generate = (): VersionData => {
  return {
    version: "4.0.0",
  };
};

export interface VersionData {
  version: string;
}
