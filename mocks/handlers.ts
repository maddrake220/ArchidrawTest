import { rest } from "msw";
import { ItemType } from "../redux/modules/gallery";
import { URL } from "../service/constants";
import mockData from "./mockData.json";

interface ImockData {
  renderings: ItemType[];
}

let items: ImockData = mockData;
export const handlers = [
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(items));
  }),
  rest.delete(`${URL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    console.log(id, ",???asd");
    items.renderings = items.renderings.filter((item) => item._id !== id);
    return res(ctx.delay(200), ctx.json(items));
  }),
];
