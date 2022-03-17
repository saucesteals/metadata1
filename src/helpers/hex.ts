export const uintToHex = (uint: number): string => {
  return (uint >>> 0).toString(16);
};
