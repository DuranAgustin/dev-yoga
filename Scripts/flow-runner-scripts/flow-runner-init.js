//Fetch the workout that needs to be shown, place the workout in an array
const serverURL = `https://dev-yoga-api.herokuapp.com/`;

// let newArray = getArray();
// newArray.then((result) => {
//   console.log(result);
// });

export async function getArray() {
  const res = await fetch(serverURL);
  const data = await res.json();
  const dataFlow = await data[0].flow;
  const newFlowArray = arrayConfig(dataFlow);
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
