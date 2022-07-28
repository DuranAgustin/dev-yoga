export async function submitFunc(title, flow) {
  await fetch("https://dev-yoga-api.herokuapp.com/flows", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      flow: flow,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
}
