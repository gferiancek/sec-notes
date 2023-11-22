const nums = [2, 5, 6, 8, 12, 1];

nums.reduce(function (accumulator, currentVal) {
  return accumulator + currentVal;
}, 0);

nums.reduce(function (accumulator, currentValue) {
  return accumulator > currentValue ? accumulator : currentValue;
});

const people = [
  { name: 'Jimbo', age: 15 },
  { name: 'Allison', age: 16 },
  { name: 'Juan', age: 15 },
  { name: 'Bertha', age: 17 },
  { name: 'Monty', age: 16 },
  { name: 'Simone', age: 15 },
  { name: 'Jess', age: 14 },
];

people.reduce(function (accumulator, person) {
  const age = person.age;
  if (accumulator[age]) {
    accumulator[age]++;
  } else {
    accumulator[age] = 1;
  }
  return accumulator;
}, {});

hoistTest();

function hoistTest() {
  console.log('HOISTING!');
}
