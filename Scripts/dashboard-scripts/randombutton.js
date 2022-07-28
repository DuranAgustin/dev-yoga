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

function saveFlow() {
  let collectionTitle = 'Random Flow';
  if (collectionTitle) {
    let allPoses = [];
    const poses = Array.from(
      document.getElementById('dash-pose-grid').childNodes
    );

    poses.forEach((element) => {
      const poseObj = {
        poseName: element.querySelector('.card-title').innerHTML,
        poseDescription: element.querySelector('.card-text').innerHTML,
        poseImage: element.querySelector('.card-img-top').src,
      };
      allPoses.push(poseObj);
      element.remove();
    });
    //For each card you need to get the title and the innertext
    let userId = localStorage.getItem('currentUser');
    submitFunc(collectionTitle, allPoses, userId);
    alert(`${collectionTitle} flow was successfully saved`);
    console.log(allPoses);
  }
}
