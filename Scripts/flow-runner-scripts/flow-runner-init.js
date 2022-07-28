import { getById } from '../../CRUD/get-flows.js';

//Fetch the workout that needs to be shown, place the workout in an array
const serverURL = `https://dev-yoga-api.herokuapp.com/`;

// export function getById(id) {
//   const serverURL = `https://dev-yoga-api.herokuapp.com/flows/find${id}`;
//   fetch(serverURL)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

export async function getArray(id) {
  const dataFlow = await getById(id);
  const newFlowArray = arrayConfig(dataFlow);
  console.log(newFlowArray);
  return newFlowArray;
}

function arrayConfig(array) {
  let repeating = false;
  let repeatCount = 0;
  let repeatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (repeating === true && array[i].poseName !== 'Repeat') {
      repeatArray.push(array[i]);
    } else if (array[i].poseName === 'Repeat' && repeating === true) {
      repeating = false;
    } else if (
      array[i].poseName === 'Right Side' ||
      array[i].poseName === 'Left Side'
    ) {
      repeatArray.push(array[i]);
    } else if (array[i].poseName === 'Repeat') {
      if (array[i + 1]) {
        if (
          array[i + 1].poseName === 'Left Side' ||
          array[i + 1].poseName === 'Right Side'
        ) {
          repeatArray.push(array[i + 1]);
          array.splice(i + 1, 1);
        }
      }
      repeatCount++;
      i = i - repeatCount;
      repeating = true;
      repeatCount = 0;
    } else {
      repeatArray.push(array[i]);
      repeatCount++;
    }
  }
  return repeatArray;
}
//fetch needs to be configured to fetch based on id right now have a manual list
//update the title to show the flow title
//update upcoming to show the second pose
//update current to show the first pose
//update previous to show the first pose -1 (if -1 then show no image)

function cardSet(flowArray, index) {
  //Checking for right or left side
  if (flowArray[index].poseName === 'Right Side') {
    sideOrRepeat.innerText = 'Right Side';
    flowIndex++;
    index++;
  }

  if (flowArray[index].poseName === 'Left Side') {
    sideOrRepeat.innerText = 'Left Side';
    flowIndex++;
    index++;
  }
  //previous
  if (index === 0) {
    previousText.innerText = '';
    previousImg.style.display = 'none';
  } else {
    previousText.innerText = flowArray[index - 1].poseName;
    previousImg.style.display = 'block';
    previousImg.src = flowArray[index - 1].poseImage;
  }
  //current
  currentImg.src = flowArray[index].poseImage;
  currentText.innerText = flowArray[index].poseName;
  //upcoming
  if (flowArray[index + 1]) {
    upcomingImg.src = flowArray[index + 1].poseImage;
    upcomingText.innerText = flowArray[index + 1].poseName;
  } else {
    upcomingText.innerHTML = '<h1><em>FINAL MOVE</em></h1>';
    upcomingText.style.marginTop = '165px';
    upcomingImg.style.display = 'none';
  }
}
