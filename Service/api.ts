import { URL } from "./constants";

export async function getRenderings() {
  return await fetch(URL, {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const { renderings } = json;
      return renderings;
    })
    .catch((error) => {
      new Error("error occured while getting data", error);
    });
}
