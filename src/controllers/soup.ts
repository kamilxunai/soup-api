import { Context } from "hono";
import { soups_data } from "../data";

export const getSoups = (c: Context) => {
  return c.json({
    data: soups_data,
  });
};
