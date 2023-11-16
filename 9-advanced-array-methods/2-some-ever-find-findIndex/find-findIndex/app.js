const scores = [0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93];

scores.find(function (score) {
  return score > 75;
});

scores.find(function (score) {
  return score % 2 === 0 && score !== 0;
});

let firstEvenIndex = scores.findIndex(function (score) {
  return score % 2 === 0 && score != 0;
});

function partition(arr, pivot) {
  const pivotIndex = arr.findIndex(function (el) {
    return el > pivot;
  });
  return [arr.slice(0, pivotIndex), arr.slice(pivotIndex)];
}

// writing find & findIndex
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

const firstOdd = myFind(scores, function (score) {
  return score % 2 !== 0;
});

function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

const passingIndex = myFindIndex(scores, function (score) {
  return score > 75;
});
