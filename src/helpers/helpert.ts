import { BLOB_PRICE } from "./constants";

export const convertBlobToUSD = (blob: number) => {
  return blob * BLOB_PRICE;
};
