// async function getData() {
//   const response = await axios.get('https://swapi.dev/api/planets');

//   // Remember destructuring? Yeah, USE IT!
//   const { next, results } = response.data
//   loopAndLog(results)

//   const secResponse = await axios.get(next)
//   loopAndLog(secResponse.data.results);
// }

// function loopAndLog(arr) {
//   for (let item of arr) {
//     console.log(item.name);
//   }
// }

// getData();
// console.log('I am called after getData()')

async function getLaunches() {
  const res = await axios.get(
    'https://api.spacexdata.com/v3/launches/upcoming'
  );
  renderLaunches(res.data);
}

function renderLaunches(launches) {
  const ul = document.querySelector('#launches');
  for (let launch of launches) {
    ul.append(makeLaunchLI(launch));
  }
}

function makeLaunchLI(launch) {
  const newLI = document.createElement('li');
  const mission = document.createElement('b');
  mission.innerText = launch.mission_name;
  newLI.append(mission);
  newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
  return newLI;
}

const button = document.querySelector('#getLaunches');
button.addEventListener('click', getLaunches);
