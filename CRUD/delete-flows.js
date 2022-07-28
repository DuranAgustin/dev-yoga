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
}
