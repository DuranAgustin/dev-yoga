const sideOrRepeat = document.getElementById('side-repeat');

const upcomingText = document.getElementById('upcoming-text');
const upcomingImg = document.getElementById('upcoming-img');

const currentText = document.getElementById('current-text');
const currentImg = document.getElementById('current-img');

const previousText = document.getElementById('previous-text');
const previousImg = document.getElementById('previous-img');

//Fetch the workout that needs to be shown, place the workout in an array
const serverURL = `https://dev-yoga-api.herokuapp.com/`;

fetch(serverURL)
  .then((res) => res.json())
  .then((data) => {
    const flowArray = data[0].flow;
    firstRound(flowArray);
  });

function firstRound(array) {
  previousText.innerHTML = `<strong>Previous</strong>: ${array[0].poseName}`;
  previousImg.src = array[0].poseImage;

  currentText.innerHTML = `<strong>Current</strong>: ${array[1].poseName}`;
  currentImg.src = array[1].poseImage;

  upcomingText.innerHTML = `<strong>Upcoming</strong>: ${array[2].poseName}`;
  upcomingImg.src = array[2].poseImage;
}
//fetch needs to be configured to fetch based on id right now have a manual list
//update the title to show the flow title
//update upcoming to show the second pose
//update current to show the first pose
//update previous to show the first pose -1 (if -1 then show no image)
