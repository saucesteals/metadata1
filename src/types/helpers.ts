export type UnionKeysOf<T> = T extends any ? keyof T : never;

export type Get<T, K extends keyof any> = T extends Record<K, any>
  ? T[K]
  : never;

export type UnionMerge<T> = { [K in UnionKeysOf<T>]: Get<T, K> };
