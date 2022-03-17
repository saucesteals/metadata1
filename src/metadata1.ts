import { CollectorData } from "./types/collectors";
import { tea, Material } from "./helpers/tea";
import crc32 from "crc-32";
import { toTwosComplementHex } from "./helpers/twoscomplement";
import * as collectors from "./collectors";
import { Metadata1Data } from "./types/collectors";

const identifier = "ECdITeCs";
const material: Material = [1888420705, 2576816180, 2347232058, 874813317];

export const generate = (data: CollectorData): Metadata1Data => {
  return Object.values(collectors).reduce((acc, { generate }) => {
    return Object.assign(acc, generate(data));
  }, {} as Metadata1Data);
};

export const encrypt = (metadata1: Metadata1Data): string => {
  const str = JSON.stringify(metadata1);
  const crcsum = toTwosComplementHex(crc32.str(str)).toUpperCase();

  const payload = crcsum + "#" + str;

  const encrypted = tea(payload, material);

  const b64 = Buffer.from(encrypted, "binary").toString("base64");

  return identifier + ":" + b64;
};

export const generatePayload = (data: CollectorData): string => {
  return encrypt(generate(data));
};
