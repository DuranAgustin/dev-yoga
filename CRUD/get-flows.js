import { cardCreateNoImg } from '../Scripts/flow-builder-scripts/helper-scripts.js';

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

export async function getUserByEmail(email) {}
