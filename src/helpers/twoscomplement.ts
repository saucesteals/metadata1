export const toTwosComplementHex = (num: number): string => {
  const size = 8;

  if (num >= 0) {
    let hex = num.toString(16);

    while (hex.length % size != 0) {
      hex = `0${hex}`;
    }

    return hex;
  } else {
    let hex = Math.abs(num).toString(16);

    while (hex.length % size != 0) {
      hex = `0${hex}`;
    }

    let out = "";

    for (let i = 0; i < hex.length; i++) {
      out += (0x0f - parseInt(hex[i] as string, 16)).toString(16);
    }

    out = (0x01 + parseInt(out, 16)).toString(16);
    return out;
  }
};
