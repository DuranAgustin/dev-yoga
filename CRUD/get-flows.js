import { cardCreateNoImg } from '../Scripts/flow-builder-scripts/helper-scripts.js';
const dashboardView = document.getElementById('saved-flows');

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
