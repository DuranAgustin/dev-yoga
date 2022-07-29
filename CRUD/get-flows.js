import { cardCreateNoImg } from "../Scripts/flow-builder-scripts/helper-scripts.js";

export function dbGet() {
  const serverURL = `https://dev-yoga-api.herokuapp.com/`;
  fetch(serverURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        const id = element._id;
        const title = element.title;
        cardCreateNoImg(title, id);
      });
    });
}

export async function getById(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/find${id}`;
  const res = await fetch(serverURL);
  const data = await res.json();
  const dataFlow = await data.flow;
  return dataFlow;
}

export async function getFlowByUID(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/userId${id}`;
  fetch(serverURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        const id = element._id;
        const title = element.title;
        cardCreateNoImg(title, id);
      });
    });
}

export async function getUserByEmail(email) {
  try {
    const serverURL = `https://dev-yoga-api.herokuapp.com/user/email${email}`;
    const res = await fetch(serverURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
