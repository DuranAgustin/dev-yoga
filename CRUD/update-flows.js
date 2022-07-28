export async function handleUpdate(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/remove${id}`;
  await fetch(serverURL, {
    method: 'PATCH', // declares HTTP request method
    headers: {
      'Content-Type': 'application/json', // declares format of data
    },
    body: JSON.stringify(
      // turns data into JSON string
      {
        poseName: 'value', // keys and values we want to add
        poseDescription: 'value2',
        poseImage: 'value3',
      }
    ),
  });
}

//TODO - Write the update API so that it passes the new flow to the API and updates it.
//TODO - Create an update pop out page that allows you to update the flow (not sure how to do this yet)....

//REFERENCE CODE REMOVE BEFORE PRESENTING
// import { imageURL } from '../helpers.js';

// export async function updateFunc(id, destName, locale, description) {
//   const URL = 'https://destinations-api-kfernie.herokuapp.com/destinations';
//   const img = await imageURL(destName);
//   await fetch(URL, {
//     method: 'put',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       _id: id,
//       destination: destName,
//       location: locale,
//       description: description,
//       photo: img,
//     }),
//   }).then(response => {
//     window.location.reload(true);
//   });
// }
