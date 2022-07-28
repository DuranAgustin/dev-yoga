export async function submitFunc(title, flow) {
  await fetch('https://dev-yoga-api.herokuapp.com/flows', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
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

export async function submitUser(firstName, lastName, email, password) {
  await fetch('https://dev-yoga-api.herokuapp.com/user', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
}
