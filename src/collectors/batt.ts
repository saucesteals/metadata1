export const generate = (): BattData => {
  return { battery: {} };
};

export interface BattData {
  battery: Record<string, never>;
}
