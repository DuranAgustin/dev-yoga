import { handleRemove } from '../../CRUD/delete-flows.js';
import { getById } from '../../CRUD/get-flows.js';
import { submitFunc } from '../../CRUD/post-flows.js';
import { imageURL } from '../dashboard-scripts/image-get.js';
import { handleUpdate } from '../../CRUD/update-flows.js';

//used to create the cards and append them to their container
export function cardCreate(title, text, img) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card');
  newDiv.innerHTML = `
  <div class = "card-body">
  <img class='card-img-top' src='${img}' alt='card image top'>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
  </div>
  `;

  newDiv.addEventListener('click', () => {
    addToList(newDiv);
  });
  document.getElementById('pose-grid').appendChild(newDiv);
}

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

  newDiv.innerHTML = `
  <div class="card__header">
      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
      <img class="card__thumb" src="../images/lotus-red.png" alt="" />
      <div class="card__header-text">
      <h3 class="card__title"><strong>${title}</strong></h3>            
  </div> 
  </div>
  `;

  let newP = document.createElement('p');
  newP.setAttribute('class', 'card__description');

  let newBtn = document.createElement('button');
  newBtn.setAttribute('class', 'btn btn-primary mybtn');
  newBtn.innerText = 'Delete';
  newBtn.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete ${title}`)) {
      handleRemove(id);
    }
  });

  let newBtnStart = document.createElement('button');
  newBtnStart.setAttribute('class', 'btn btn-primary mybtn');
  newBtnStart.innerText = 'Start Flow';
  newBtnStart.addEventListener('click', () => {
    sessionStorage.setItem('id', id);
    location.href = './flow-runner.html';
  });

  let newBtnUpdate = document.createElement('button');
  newBtnUpdate.setAttribute('class', 'btn btn-primary mybtn');
  newBtnUpdate.innerText = 'Update';
  newBtnUpdate.addEventListener('click', () => {
    sessionStorage.setItem('id', id);
    location.href = './flow-builder.html';
  });

  newP.appendChild(newBtnStart);
  newP.appendChild(newBtnUpdate);
  newP.appendChild(newBtn);

  newDiv.appendChild(newP);
  newA.appendChild(newDiv);
  document.getElementById('saved-flows').appendChild(newA);
}

//function to add the node to the pose list for the flow
export function addToList(node) {
  var copyDiv = node.cloneNode();
  copyDiv.innerHTML = node.innerHTML;
  copyDiv.setAttribute('class', 'card newCard');
  copyDiv.draggable = true;

  copyDiv.addEventListener('click', () => {
    copyDiv.remove();
  });
  document.getElementById('new-flow-container').appendChild(copyDiv);
}

//used to save the flow once the user has built their desired workout
export function saveFlow() {
  let collectionTitle = prompt('Please provide a title for your new flow');
  if (collectionTitle) {
    let allPoses = [];
    const poses = Array.from(
      document.getElementById('new-flow-container').childNodes
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

export async function updateFlow() {
  const flowTitle = sessionStorage.getItem('id');
  let obj = await getById(flowTitle);
  console.log(obj);
  // console.log(typeof obj);
  console.log('hit');

  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;
    //console.log(key, value);
    console.log(value.poseName);
    cardCreateDB(
      value.poseName,
      value.poseDescription,
      value.poseImage,
      flowTitle
    );
  });

  console.log('hit2');
  document.getElementById('updatable').addEventListener(
    'click',
    function () {
      updatedFlow(flowTitle);
    },
    false
  );
}

export function cardCreateDB(title, text, img) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card newCard');
  newDiv.innerHTML = `
  <div class = "card-body">
  <img class='card-img-top' src='${img}' alt='card image top'>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
  </div>
  `;
  //removes
  newDiv.addEventListener('click', () => {
    newDiv.remove();
  });

  document.getElementById('new-flow-container').appendChild(newDiv);
  document.getElementById('updatable').removeAttribute('hidden');
}

export function updatedFlow(flowTitle) {
  console.log(flowTitle);
  let id = flowTitle;
  if (id) {
    let allPoses = [];
    const poses = Array.from(
      document.getElementById('new-flow-container').childNodes
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

    handleUpdate(id, allPoses);
    console.log(allPoses);
  }
}

console.log(sessionStorage.getItem('id'));
