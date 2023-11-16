# Functions

In JavaScript, functions are values, meaning they can be stored in variables and passed around between other functions!

```
// Annonymous function stored in the variable whisper
const whisper = function () {
  console.log('psst I have a secret');
}
whisper() // psst I have a secret

// Named Functions stored in an Array
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function mutliply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const mathFuncs = [add, subtract, multiply, divide]
mathFuncs[2](5, 2) // 10
```

## Callbacks

**Callbacks** are functions that are passed as an argument to another function.

```
// Declaration
function doMath(a, b, mathFunc) {
  return mathFunc(a, b)
}

// passing named function
doMath(3, 4, add) // 7

// passing annonymous function
doMath(3, 4, function(a, b) {
  return 3 ** 4;
}) // 81
```

Notice that when passing a named function you omit the `()`! (Adding them will execute the function immediately and pass the return value instead of executing as a callback!)

You can even pass in multiple functions to execute them all!

```
// Declaration
function doAllMath(a, b, mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(a, b));
  }
}

// Passing Array of functions
doAllMath(10, 5, mathFuncs) // 15 5 50 2
```

# Advanced Array Methods

#### Array.from()

Often, you might want to select some data from the DOM using `querySelectorAll()`, but if you remember, that returns a NodeList! Thankfully, it's easy to turn that into an array so we can use all of the methods covered below.

```
const items = Array.from(document.querySelectorAll('li'));
// [li, li, li, li]
```

#### forEach

forEach runs a callback for each value in an array. It's worth noting that it will **always** return `undefined`.

```
let arr = [1, 2, 3];
arr.forEach(function(value, index array) {
  console.log(value)
});
// 1 2 3
```

forEach will always pass the value, index, and full array, but you can choose what to use.

```
const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

prices.forEach(function (price) {
  total += price;
});
console.log(total);
```

If you haven't noticed yet, this is strikingly similar to **for..of**. `forEach` is an older JS function that existed long before **for..of** was implemented, but now that we have **for..of**, `forEach` is far less common.

#### map

`map` runs a callback for each value in an array and returns a new array containing the resuls of the callback function on each item. **It does not alter the original array**

`map` **always** returns an array of the same lenght as the provided array.

```
let numbers = [1, 2, 3];

numbers.map(function(value, index, array) {
  return value * 10
});
// [10, 20, 30]
```

`map` is commonly used to extract a piece of a complex object.

```
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
  return a.href;
})
// ['https://www.google.com', 'https://www.reddit.com', ...]
```

When to use `map`:

- You want to 'transform' and array into another array of the same length.
- You don't want to overwrite an existing array and instead want a new copy.

#### filter

`filter` runs a callback for each value in an array and returns a new array of the same or shorter length including all values in which the callback returned `true`.

```
let letters = ['a', 'b', 'c', 'b', 'c'];

letters.filter(function(value, index, array) {
  return value === 'b';
})
// ['b', 'b']
```

When to use `filter`:

- You want to 'transform' and array into another array of the same or smaller length based on a condition.
- You want to see how many elements in an array satisfy a condition
- You do not want to modify the existing array you are filtering.

#### map + filter

It's common to combine multiple methods as well. Imagine you not only want to filter for all checked checkboxes, but also extract out the task for each on.

```
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

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
```

#### some

`some` runs a callback on an array, and if the callback returns true at least ones, some returns true. (It's testing if some item in array meets condition).

```
let numbers = [1, 2, 3];
numbers.some(function(value, index, array) {
  return value < 3;
})
// true
```

When to use `some`:

- You need to determine if at least one value in an array satisfies a condition and its complex enough to require a callback. (`includes()` or `indexOf()` don't cut it.)
- A simple alternative to using filter and seeing if at least one element satisfies a condition.

#### every

`every` runs a callback on an array and if the callback returns false at least once, it returns false. (It's testing if **ever** item in array meets condition);

```
let words = ['happy', 'angry', 'kitten']
words.every(function(word) {
  return word.length > 10;
})
// false
```

When to use `every`:

- You need to determine if every value in an array satisfies a condition and it's complex enough to require a callback.
- A simple alternative to using filter and seeing if the filtered array is the same length as the original.

#### find

`find` runs a callback on an array, and if the callback returns true, `find` will return the value that satisfied the condition. Note, it only returns the first match!

```
let scores = [50, 65, 25, 89, 100, 97]

scores.find(function(score) {
  return score > 70;
})
// 89
```

When to use `find`:

- You need to determine if a value in an array exists and it's complex enough to require a callback
- A simple alternative to using `filter` and accessing the first element of the filtered array.

#### findIndex

`findIndex` is almost identical to `find`, except it returns the index instead of the value.

```
let scores = [50, 65, 25, 89, 100, 97];

scores.findIndex(function(score) {
  return score > 70;
})
// 3
```

When to use `findIndex`:

- You need to determine the index of a value in an array, if it exists, and it's complex enough to require a callback.

#### reduce

`reduce` runs a callback on an array, and uses an accumulator to reduce the array down to a single value. (i.e. the result of the first callback is passed to the second call, which is passed to the third, etc.)

```
const nums = [2, 5, 6, 8, 12, 1];

// for..of
let total = 0;
for (let n of nums) {
  total += n;
}
total // 34

// reduce
nums.reduce(function(accumulator, currentValue, index, arr) {
  return accumulator + currentValue;
}, 0);
// 34
```

Note the placement of **0**! It is an optional parameter that serves as the initial value for accumulator. if specified, accumulator = initialValue and curentValue starts looping at index 0. If it isn't specified, accumulator = index 0 and currentValue starts looping at index 1.

When to use `reduce`:

- It works for almost anything, but is sometimes overkill. Generally, use it when you want to `reduce` something.
- When you want to transform an array into another data structure.
