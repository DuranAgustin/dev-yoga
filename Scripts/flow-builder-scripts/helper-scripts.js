const YOGA_API = 'https://lightning-yoga-api.herokuapp.com/yoga_poses';

export function initialGet() {
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
  newDiv.addEventListener('click', () => {
    var copyDiv = newDiv.cloneNode();
    copyDiv.innerHTML = newDiv.innerHTML;
    copyDiv.setAttribute('class', 'card newCard');
    copyDiv.addEventListener('click', () => {
      copyDiv.remove();
    });
    document.getElementById('new-flow-container').appendChild(copyDiv);
  });
  document.getElementById('pose-grid').appendChild(newDiv);
}

function imgGenerator() {}

export function saveFlow() {
  let collectionTitle = prompt('Please provide a title for your new flow');
  if (collectionTitle) {
    let allPoses = [{ title: collectionTitle }, { poses: [] }];
    const poses = Array.from(
      document.getElementById('new-flow-container').childNodes
    );

    //removing the button element from the array of nodes
    poses.shift();

    poses.forEach((element) => {
      const poseObj = {
        poseName: element.querySelector('.card-title').innerHTML,
        poseDescription: element.querySelector('.card-text').innerHTML,
      };
      allPoses[1].poses.push(poseObj);
      element.remove();
    });
    //For each card you need to get the title and the innertext
    alert(`${collectionTitle} flow was successfully saved`);
    console.log(allPoses);
  }
}
