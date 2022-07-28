export async function handleUpdate(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/remove${id}`;
  await fetch(serverURL, {
    method: "PATCH", // declares HTTP request method
    headers: {
      "Content-Type": "application/json", // declares format of data
    },
    body: JSON.stringify(
      // turns data into JSON string
      {
        poseName: "value", // keys and values we want to add
        poseDescription: "value2",
        poseImage: "value3",
      }
    ),
  });
}
