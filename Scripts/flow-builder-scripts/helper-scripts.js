<<<<<<< HEAD
import { handleRemove } from '../../CRUD/delete-flows.js';
import { submitFunc } from '../../CRUD/post-flows.js';
import { imageURL } from '../dashboard-scripts/image-get.js';
=======
import { handleRemove } from "../../CRUD/delete-flows.js";
import { submitFunc } from "../../CRUD/post-flows.js";
import { dbGet } from "../../CRUD/get-flows.js";
>>>>>>> 179e902 (getting flows to update)

const YOGA_API = "https://lightning-yoga-api.herokuapp.com/yoga_poses";

//Gets all poses from the yoga api
export function initialGet() {
  cardCreate(
    "Repeat",
    "Repeat all previous moves",
    "../images/icons8-repeat-64.png"
  );
  cardCreate(
    "Right Side",
    "Do the following movements on the right side",
    "../images/icons8-right-arrow-64.png"
  );
  cardCreate(
    "Left Side",
    "Do the following movements on the left side",
    "../images/icons8-left-arrow-64.png"
  );
  fetch(YOGA_API)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        const title = data.items[i].english_name;
        const text = data.items[i].yoga_categories[0].description;
        const img = data.items[i].img_url;
        cardCreate(title, text, img);
      }
    });
}

//used to create the cards and append them to their container
export function cardCreate(title, text, img) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card");
  newDiv.innerHTML = `
  <div class = "card-body">
  <img class='card-img-top' src='${img}' alt='card image top'>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
  </div>
  `;

  newDiv.addEventListener("click", () => {
    addToList(newDiv);
  });
  document.getElementById("pose-grid").appendChild(newDiv);
}

<<<<<<< HEAD
//this function is long because it needs to create elements separately so that the buttons have listeners
export async function cardCreateNoImg(title, id) {
  let myImg = await imageURL();
  let newA = document.createElement('a');
  newA.setAttribute('class', 'card');
  newA.setAttribute('db-id', `${id}`);

  newA.innerHTML = `
  <img src="${myImg}" class="card__image" alt="test"/>
  `;

  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card__overlay');

=======
export function cardCreateNoImg(title, id) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card");
  newDiv.setAttribute("id", "flow-card");
  newDiv.setAttribute("style", "width: 18rem");
  newDiv.setAttribute("db-id", `${id}`);
>>>>>>> 179e902 (getting flows to update)
  newDiv.innerHTML = `
  <div class="card__header">
      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
      <img class="card__thumb" src="../images/lotus-red.png" alt="" />
      <div class="card__header-text">
      <h3 class="card__title"><strong>${title}</strong></h3>            
  </div> 
  </div>
  `;
<<<<<<< HEAD

  let newP = document.createElement('p');
  newP.setAttribute('class', 'card__description');

  let newBtn = document.createElement('button');
  newBtn.setAttribute('class', 'btn btn-primary mybtn');
  newBtn.innerText = 'Delete';
  newBtn.addEventListener('click', () => {
=======
  var newBtn = document.createElement("button");
  newBtn.setAttribute("class", "btn btn-primary");
  newBtn.innerText = "Delete";
  newBtn.addEventListener("click", () => {
>>>>>>> 179e902 (getting flows to update)
    if (confirm(`Are you sure you want to delete ${title}`)) {
      handleRemove(id);
    }
  });

<<<<<<< HEAD
  let newBtnStart = document.createElement('button');
  newBtnStart.setAttribute('class', 'btn btn-primary mybtn');
  newBtnStart.innerText = 'Start Flow';
  newBtnStart.addEventListener('click', () => {
    sessionStorage.setItem('id', id);
    location.href = './flow-runner.html';
=======
  var newBtnStart = document.createElement("button");
  newBtnStart.setAttribute("class", "btn btn-secondary");
  newBtnStart.innerText = "Start Flow";
  newBtnStart.addEventListener("click", () => {
    console.log("Start Clicked");
>>>>>>> 179e902 (getting flows to update)
  });

<<<<<<< HEAD
  newP.appendChild(newBtn);
  newP.appendChild(newBtnStart);

  newDiv.appendChild(newP);
  newA.appendChild(newDiv);
  document.getElementById('saved-flows').appendChild(newA);
=======
  document.getElementById("saved-flows").appendChild(newDiv);
>>>>>>> 179e902 (getting flows to update)
}
//function to add the node to the pose list for the flow
export function addToList(node) {
  var copyDiv = node.cloneNode();
  copyDiv.innerHTML = node.innerHTML;
  copyDiv.setAttribute("class", "card newCard");
  copyDiv.addEventListener("click", () => {
    copyDiv.remove();
  });
  document.getElementById("new-flow-container").appendChild(copyDiv);
}

//used to save the flow once the user has built their desired workout
export function saveFlow() {
  let collectionTitle = prompt("Please provide a title for your new flow");
  if (collectionTitle) {
    let allPoses = [];
    const poses = Array.from(
      document.getElementById("new-flow-container").childNodes
    );

    poses.forEach((element) => {
      const poseObj = {
        poseName: element.querySelector(".card-title").innerHTML,
        poseDescription: element.querySelector(".card-text").innerHTML,
        poseImage: element.querySelector(".card-img-top").src,
      };
      allPoses.push(poseObj);
      element.remove();
    });
    //For each card you need to get the title and the innertext
    submitFunc(collectionTitle, allPoses);
    alert(`${collectionTitle} flow was successfully saved`);
    console.log(allPoses);
  }
}

export function removeNodes(parentElm) {}

export function updateFlow() {
  let collectionTitle = prompt(
    "Please provide a title for your flow to update"
  );

  if (collectionTitle) {
    let allPoses = [];
    const poses = Array.from(
      document.getElementById("new-flow-container").childNodes
    );

    poses.forEach((element) => {
      const poseObj = {
        poseName: element.querySelector(".card-title").innerHTML,
        poseDescription: element.querySelector(".card-text").innerHTML,
        poseImage: element.querySelector(".card-img-top").src,
      };
      allPoses.push(poseObj);
      element.remove();
    });
    //For each card you need to get the title and the innertext
    submitFunc(collectionTitle, allPoses);
    alert(`${collectionTitle} flow was successfully saved`);
    console.log(allPoses);
  }
}
