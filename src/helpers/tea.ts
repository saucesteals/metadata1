/* eslint-disable @typescript-eslint/no-non-null-assertion */

export type Material = [number, number, number, number];

export const tea = (payload: string, material: Material) => {
  if (payload.length === 0) return "";

  const chunks = Math.ceil(payload.length / 4);
  const o: number[] = [];

  for (let i = 0; i < chunks; i++)
    o[i] =
      (255 & payload.charCodeAt(4 * i)) +
      ((255 & payload.charCodeAt(4 * i + 1)) << 8) +
      ((255 & payload.charCodeAt(4 * i + 2)) << 16) +
      ((255 & payload.charCodeAt(4 * i + 3)) << 24);

  let n = Math.floor(6 + 52 / chunks);

  let c = o[chunks - 1]!;

  for (let d = 0; n-- > 0; ) {
    const h = ((d += 2654435769) >>> 2) & 3;

    for (let u = 0; u < chunks; u++) {
      const a = o[(u + 1) % chunks]!;
      c = o[u] +=
        (((c >>> 5) ^ (a << 2)) + ((a >>> 3) ^ (c << 4))) ^
        ((d ^ a) + (material[(3 & u) ^ h]! ^ c));
    }
  }

  const f: string[] = [];
  for (let s = 0; s < chunks; s++)
    f[s] = String.fromCharCode(
      255 & o[s]!,
      (o[s]! >>> 8) & 255,
      (o[s]! >>> 16) & 255,
      (o[s]! >>> 24) & 255
    );

  return f.join("");
};
