const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener('error', () => {
  console.log('ERROR!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets');
firstReq.send();
console.log('Sending Request.....')