import { cardCreate, initialGet } from './helper-scripts.js';
const YOGA_SEARCH_API = `https://lightning-yoga-api.herokuapp.com/yoga_poses?english_name=`;
const searchBar = document.getElementById('filter-cards');
const searchButton = document.getElementById('filter-button');

searchButton.addEventListener('click', () => {
  const searchValue = searchBar.value;
  const gridNodes = document.getElementById('pose-grid');
  //need to refactor due to listeners
  if (searchValue) {
    //need to fix this part
    gridNodes.innerHTML = '';

    const SEARCHURL = `${YOGA_SEARCH_API}${searchValue}`;
    fetch(SEARCHURL)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.items.length; i++) {
          const title = data.items[i].english_name;
          const text = data.items[i].yoga_categories[0].description;
          const img = data.items[i].img_url;
          cardCreate(title, text, img);
        }
      });
    searchBar.value = '';
    searchBar.setAttribute('placeholder', 'click search again to refresh');
  } else {
    searchBar.setAttribute('placeholder', 'search for a pose by name');
    gridNodes.innerHTML = '';
    initialGet();
  }
});
