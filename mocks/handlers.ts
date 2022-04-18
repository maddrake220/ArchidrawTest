import { rest } from "msw";
import { URL } from "../utils/constants";
import mockData from "./mockData.json";

export const handlers = [
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
