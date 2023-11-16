const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
}
colors.forEach(yell);

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

prices.forEach(function (price) {
  total += price;
});
console.log(total);

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let newTotal = 0;
myForEach(prices, function (price, index) {
  newTotal += price;
  console.log(`At index ${index} you added ${price}. NewTotal: ${newTotal}`);
});
