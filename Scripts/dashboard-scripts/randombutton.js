import { submitFunc } from '../../CRUD/post-flows.js';

document.getElementById('randomBtn').addEventListener('click', randomGet);

const YOGA_API = 'https://lightning-yoga-api.herokuapp.com/yoga_poses';

export function randomGet() {
  let collectionTitle = 'Random Flow';
  fetch(YOGA_API)
    .then((res) => res.json())
    .then((data) => {
      const mySet = new Set();

      while (mySet.size < 16) {
        mySet.add(Math.floor(Math.random() * 48));
      }
      let allPoses = [];
      mySet.forEach((element) => {
        const poseObj = {
          poseName: data.items[element].english_name,
          poseDescription: data.items[element].yoga_categories[0].description,
          poseImage: data.items[element].img_url,
        };
        allPoses.push(poseObj);
      });
      let userId = localStorage.getItem('currentUser');
      submitFunc(collectionTitle, allPoses, userId);
      console.log(allPoses);
    });
}
