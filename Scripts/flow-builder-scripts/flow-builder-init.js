import { cardCreate } from './helper-scripts.js';

const YOGA_API = 'https://lightning-yoga-api.herokuapp.com/yoga_poses';

export function initialGet() {
  cardCreate(
    'Repeat',
    'Repeat all previous moves',
    '../images/icons8-repeat-64.png'
  );
  cardCreate(
    'Right Side',
    'Do the following movements on the right side',
    '../images/icons8-right-arrow-64.png'
  );
  cardCreate(
    'Left Side',
    'Do the following movements on the left side',
    '../images/icons8-left-arrow-64.png'
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
