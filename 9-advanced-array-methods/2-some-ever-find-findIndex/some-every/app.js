const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'psychophysicotherapeutics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively',
];

words.some(function (word) {
  return word.length > 25;
});

words.some(function (word) {
  return word.includes('thyroid');
});

words.every(function (word) {
  return word.length >= 5;
});

function allStrings(arr) {
  return arr.every(function (el) {
    return typeof el === 'string';
  });
}

const btn = document.querySelector('button');
btn.addEventListener('click', function (event) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(function (checkbox) {
    return checkbox.checked;
  });
  if (!allChecked) alert('Please agree to everything!');
});

// writing some & every
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
}

const someEvens = mySome([1, 2, 3, 4], function (num) {
  return num % 2 === 0;
});

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

const everyEven = myEvery([1, 2, 3, 4], function (num) {
  return num % 2 !== 0;
});
