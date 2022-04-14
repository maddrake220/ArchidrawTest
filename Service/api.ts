import { URL } from "./constants";

// export async function getRenderings(): Promise<{ data: number }> {
//   const response = await fetch(URL, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const result = await response.json();

//   return result;
// }

export async function fetchRenderings() {
  return await fetch(URL)
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
