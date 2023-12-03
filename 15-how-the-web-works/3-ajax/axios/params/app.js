async function getJoke(category) {
  let res = await axios.get(`https://api.chucknorris.io/jokes/random`, {
    params: { category },
  });
  console.log(res.data.value);
}
