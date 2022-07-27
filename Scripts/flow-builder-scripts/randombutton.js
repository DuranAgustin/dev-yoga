document.getElementById('randomBtn').addEventListener('click', randomGet);

const YOGA_API = 'https://lightning-yoga-api.herokuapp.com/yoga_poses';

export function randomGet() {
  document.getElementById('clock-container').style.display = 'block';
  document.getElementById('dash-pose-cards-container').style.display = 'block';
  if (document.getElementById('dash-pose-grid') !== null) {
    document.getElementById('dash-pose-grid').innerHTML = '';
    console.log('clicked random again');
  }

  fetch(YOGA_API)
    .then((res) => res.json())
    .then((data) => {
      const mySet = new Set();

      while (mySet.size < 16) {
        mySet.add(Math.floor(Math.random() * 48));
      }
      mySet.forEach((element) => {
        const title = data.items[element].english_name;
        const text = data.items[element].yoga_categories[0].description;
        const img = data.items[element].img_url;
        cardCreate(title, text, img);
      });
    });
}

function cardCreate(title, text, img) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card');
  newDiv.setAttribute('style', 'width: 16rem');
  newDiv.innerHTML = `
  <div class = "card-body">
  <img class='card-img-top' src='${img}' alt='card image top'>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
  </div>
  `;

  document.getElementById('main').innerHTML =
    'Please hold each pose for two minutes!';
  document.getElementById('dash-pose-grid').appendChild(newDiv);
}

function imgGenerator() {}

export function saveFlow() {
  let allPoses = [];
  const poses = Array.from(document.getElementById('main').childNodes);

  //removing the button element from the array of nodes
  poses.shift();

  poses.forEach((element) => {
    const poseObj = {
      poseName: element.querySelector('.card-title').innerHTML,
      poseDescription: element.querySelector('.card-text').innerHTML,
    };
    allPoses.push(poseObj);
  });
  //For each card you need to get the title and the innertext

  console.log(allPoses);
}
