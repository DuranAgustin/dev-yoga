export async function handleRemove(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/remove${id}`;
  await fetch(serverURL, {
    method: "delete",
  }).then((response) => {
    window.location.reload(true);
  });
}
