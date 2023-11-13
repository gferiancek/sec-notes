const form = document.querySelector('#monkeyform');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('You submitted the form!');
});

document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('No google for you!');
});

document.querySelector('input[type="checkbox"]').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('No checking for you!');
});
