export async function imageURL(dNValue) {
  let returnval;
  const ACCESS_KEY = 'C6L_DP5y54cCQkGgwYtfcDq0gdm059TKAP3BZScVWek';
  const URL = `https://api.unsplash.com/search/photos?query=galaxy&client_id=${ACCESS_KEY}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();
    const rand = Math.floor(Math.random() * data.results.length);
    returnval = data.results[rand].urls.regular;
  } catch (error) {
    console.log(error);
  }
  return returnval;
}
