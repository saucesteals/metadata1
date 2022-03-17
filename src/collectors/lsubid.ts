export const generate = (): LsubidData => {
  return {
    lsUbid: `X59-9642719-1673432:${Math.floor(new Date().getTime() / 1e3)}`,
  };
};

export interface LsubidData {
  lsUbid: string;
}
