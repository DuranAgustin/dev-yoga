export async function handleUpdate(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/update${id}`;
  await fetch(serverURL, {
    method: "PUT", // declares HTTP request method
    headers: {
      "Content-Type": "application/json", // declares format of data
    },
    body: JSON.stringify(
      // turns data into JSON string
      {
        flow: req.body.flow,
      }
    ),
  });
}
