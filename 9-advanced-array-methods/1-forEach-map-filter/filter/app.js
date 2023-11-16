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

const longWords = words.filter(function (word) {
  return word.length >= 20;
});

const cOrUWords = words.filter(function (w) {
  return w[0] === 'u' || w[0] === 'c';
});

const containsVowel = function (word) {
  for (let char of word) {
    if (isVowel(char)) return true;
  }
  return false;
};

const isVowel = function (char) {
  return 'aeiou'.indexOf(char) != -1;
};

const hasVowels = words.filter(containsVowel);
const noVowels = words.filter(function (word) {
  return !containsVowel(word);
});

const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"'));

function extractCompletedTodos() {
  return checkboxes
    .filter(function (box) {
      return box.checked;
    })
    .map(function (checkbox) {
      return checkbox.parentElement.innerText;
    });
}

const completedTasks = extractCompletedTodos();

// Writing filter
function myFilter(arr, callback) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) filtered.push(arr[i]);
  }
  return filtered;
}

const myWords = myFilter(words, function (word) {
  return word.length <= 15;
});

const everyOtherWord = myFilter(words, function (word, i) {
  return i % 2 === 0;
});
