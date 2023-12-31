// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users', {
//     username: 'ButtersTheChicken',
//     email: 'butters@gmail.com',
//     age: 1,
//   });
//   console.log(res);
// }

async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {
    params: { token },
  });
  console.log(res);
}

async function signUp(username, password, name) {
  const res = await axios.post(
    'https://hack-or-snooze-v3.herokuapp.com/signup',
    { user: { name, username, password } }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    'https://hack-or-snooze-v3.herokuapp.com/login',
    { user: { username, password } }
  );
  return res.data.token;
}

async function getUsersWithAuth() {
  const token = await login('gavvy', '2348jkls389');
  getUsers(token);
}

async function createStory() {
  const token = await login('gavvy', '2348jkls389');
  const newStory = {
    token,
    story: {
      author: 'Butters',
      title: 'BOCK BOCK BOCK',
      url: 'http://chickens4lyfe.com'
    }
  }

  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory)
  console.log(res);
}
// signUp('gavvy', '2348jkls389', 'butters')
createStory();