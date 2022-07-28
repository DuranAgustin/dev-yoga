<<<<<<< HEAD
function handleRemove(event) {
  console.log(event.getAttribute("db-id"));
  let ID = event.getAttribute("db-id");

  // const serverURL = `https://dev-yoga-api.herokuapp.com/` + ID;
  //console.log(ID);
  //62e0afe6161788125c6849bf
  // fetch("https://dev-yoga-api.herokuapp.com/" + ID, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(ID),
  // })
  //   .then((res) => res.text()) // or res.json()
  //   .then((res) => console.log(res));\function deleteListingByName(client, nameOfListing) {
=======
export async function handleRemove(id) {
  const serverURL = `https://dev-yoga-api.herokuapp.com/flows/remove${id}`;
  await fetch(serverURL, {
    method: 'delete',
  }).then((response) => {
    window.location.reload(true);
  });
>>>>>>> be3425e36b7bcec578a34524b98f8f76bceee3f1
}
