const YOGA_API = 'https://lightning-yoga-api.herokuapp.com/yoga_poses';

export function initialGet() {
  fetch(YOGA_API)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        console.log(data.items[i].english_name);
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
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
  </div>
  `;
  newDiv.addEventListener('click', () => {
    var copyDiv = newDiv.cloneNode();
    copyDiv.innerHTML = newDiv.innerHTML;
    copyDiv.addEventListener('click', () => {
      copyDiv.remove();
    });
    document.getElementById('new-flow-container').appendChild(copyDiv);
  });
  document.getElementById('pose-grid').appendChild(newDiv);
}

function imgGenerator() {}

function addPose() {}

function savePose() {}
