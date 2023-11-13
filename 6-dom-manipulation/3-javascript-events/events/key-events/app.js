// document.addEventListener('keypress', function (e) {
//   console.log(`You pressed the ${e.key} key!`);
// });

// document.addEventListener('keydown', function (e) {
//   console.log('Keydown detected!');
// });

// document.addEventListener('keyup', function (e) {
//   console.log('Keyup detected!');
// });

document.querySelector('input').addEventListener('keypress', function (e) {
  console.log('KEY PRESS', e.key);
});
