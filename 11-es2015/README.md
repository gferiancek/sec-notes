# ES2015 New Features

ES2015 was a major update that added a lot of big changes to ECMAScript. It was also the start of yearly releases. (The ES5 was released 5 years prior, in 2010!)

New features:

## let & const

| Keyword | Reassign? | Redeclare? | Mutatable? |   Scope Rules   |
| :-----: | :-------: | :--------: | :--------: | :-------------: |
|   var   |    yes    |    yes     |    yes     | function scoped |
|   let   |    yes    |     no     |    yes     |  block scoped   |
|  const  |    no     |     no     |    yes     |  block scoped   |

These days, there is really no reason to use **var**. Default to using **const** and if you find you need access to reassignment, you can change it to **let**.

## Arrow Functions

**Arrow functions** can be used to shorten annonymous function syntax, such as with callbacks or function expressions. This doesn't work with normal function declarations!

```
// Normal Method
const add = function(x, y) {
  return x + y;
}

// Arrow Method
const add = (x, y) => {
  return x + y;
}
```

If you only have a single parameter, you are able to omit the `()` found before the arrow! (Note, with 0 or 2+ you still need `()`)

```
[1, 2, 3, 4, 5].forEach(n => {
  console.log(n * 10);
})
```

### Implicit Returns

<sub>Note: While the above is valid, a lot of style guides prefer to keep the `()` anyways. If you ever change the # of parameters, then they're already there! </sub>

If the function has a single expression, you can omit `{}` and the function will have an implicit return value.

```
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);
// [2, 4, 6];

[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? 'even' : 'odd'))
// ['odd', 'even', 'odd', 'even', ...]

const dailyRainTotals = [ [1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.5] ]
dailyRainTotals.map((hourlyRainTotals) =>
  hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);
```

### Common Gotchas

#### Returning Object Literals

If returning an object literal, you cannot use implicit return unless you wrap the object in `()`!

```
// NOT VALID
const makeMath = (num) =>
  {
    square: num * num,
    double: num * 2
  };

// VALID
const makeMath = (num) => (
  {
    square: num * num,
    double: num * 2,
  }
);
```

<sub>In addition to adding `()` you could also just use an explicit return</sub>

#### this

When using **Arrow Functions**, the keyword **_this_** can sometimes have unexpected values.

```
const cat = {
  name: 'Bubs',
  meow: function() {
    return `${this.name} says MEOW!!!`
  }
}
// 'Bubs says MEOW!!!'

const cat = {
  name: 'Bubs',
  meow: () => {
    return `${this.name} says MEOW!!!`
  }
}
// ' says MEOW!!!'
```

As a rule, avoid using **Arrow Functions** when:

- In an object method
- When you need access to the keyword **_this_**

## rest / spread

**rest** and **spread** share the same `...` operator. In function arguments, it's known as **rest**, and in all other cases it's known as **spread**.

### arguments

Pre rest / spread, we would have to use the builtin **arguments** that exists in every function, and is an **array-like** object, meaning you can't use `map`, `reduce`, etc on it.

```
function sum() {
  // builtin arguments needs to be converted to an Array.
  const args = Array.from(arguments);
  return args.reduce((sum, val) => sum + val);
}
```

<sub>Note: **arguments** does NOT work inside of **arrow functions**!</sub>

### rest

**rest** will collect all arguments and evaluate into an Array.

```
const sumAll = (...values) => {
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
}
```

**rest** can also be used in conjuction with named parameters, as long as it comes last.

```
function makeFamily(parent1, parent2, ...kids) {
  return {
    parents: [parent1, parent2],
    children: kids.length ? kids : 0,
  }
}

const filterByType = (type, ...vals) => {
  return vals.filter((val) => typeof val === type);
}
```

### spread

**spread** is used to take an iterable and spread it out into individual values.

#### function parameters

```
const nums = [4, 5, 88, 123, 0.92, 34];

Math.max(...nums);
// 123
```

#### Array literals

```
const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// NOT A COPY - Same reference
const copy = palette

// COPY
const copy = [...palette];
```

While the above example is simple, it makes it very easy to combine with additional values.

```
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5, 6];
const newFirst = [4, 5, 6, ...nums];
const zeroToFour = [0, ...nums, 4];
const multiSpread = [...nums, 4, 5, 6, ...newFirst];
```

#### Objects

Objects are not iterables, so the normal usage of spread doesn't work:

```
const tea = {
  type: 'oolong',
  name: 'winter sprout',
  origin: 'taiwan',
}

// NOT VALID
functionCall(...tea)
```

However, we can still spread objects while inside of an object literal:

```
const tea = {
  type: 'oolong',
  name: 'winter sprout',
  origin: 'taiwan',
}

// Copies tea with an additional property.
const copy = {...tea, price: 22.99}

// Copies tea and updates the name property.
const newTea = {...tea, name: 'golden frost'}

const teaData = {
  steepTime: '30s',
  brewTemp: 175,
}

// Copies properties from multiple objects
const fullTea = {...tea, ...teaData}
```

<sub>Keep in mind the order in which you spread. If teaData had an origin property, it would overwrite the origin of tea.</sub>

#### Deep Copies

When using **spread** it's important to remember that it can only make shallow copies! For example:

```
const shoppingCart = [
  {
    name: 'honey orchid',
    quantity: 2,
    price: 13.5,
  },
  {
    name: 'african solstice'
    quantity: 4,
    price: 25.99,
  }
];

const cartCopy = [...shoppingCart]

shoppingCart === cartCopy // FALSE
shoppingCart[0] === cartCopy[0] // TRUE
```

While we get a new array, it only creates a shallow copy, meaning that both arrays reference the same objects.

## Object Enhancements

Three main usecases were implemented to make creating object literals easier!

### Property Shorthand

If the name of the variable and property are the same, you can omit the standard `key: value` syntax with just `key`. The value will be filled with the value of the variable.

```
function makePerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    isAlive: true,
  }
}
```

### Method Shorthand

Insead of the usual `key: function() {}` syntax, you can simply use `key() {}`.

```
const mathStuff = {
  // OLD METHOD
  add: function(a, b) {
    return a + b;
  },
  // NEW METHOD
  square(a) {
    return a * a;
  },
}
```

<sub>Reminder: You shouldn't use Arrow Functions inside of object literals!</sub>

### Computed Property Names

**Computed property names** allows us to set dynamic property names based on the value of a variable.

As an example, say you had the following variables

```
const name = 'periwinkle';
const hex = '9c88ff';
```

and you wanted to make an object with two-way lookup where you could search for the color name and get the hex code, or search for the hex code and get the color name:

```
// OLD METHOD
function makeColor(name, hex) {
  const color = {};
  color[name] = hex;
  color[hex] = name;
  return color;
}

// NEW METHOD
function makeColor(name, hex) {
  return {
    [name]: hex,
    [hex]: name,
  }
}
// {periwinkle: '9c88ff', 9c88ff: 'periwinkle'}
```

## Destructuring

**Destructuring** is a feature that allows us to extract data from arrays, objects, and maps and set them into new variables. You can even do multiple variables at a time.

### Object Destructuring

```
const teaOrder = {
  variety: 'oolong',
  teaName: 'winter sprout',
  origion: 'taiwan',
  price: 12.99,
  hasCaffeine: true,
  quantity: 3,
}

// Old way to save properties
const price = teaOrder.price
const quantity = teaOrder.quantity
const teaName = teaOrder.teaName;

// Destructuring
const { price, quantity, teaName } = teaOrder
// price = 12.99
// quantity = 3
// teaName = 'winter sprout'
```

Note, if the property doesn't exist, you'll simply get `undefined`.

#### rest

You can even add in the **rest** operator.

```
const { price, quantity, teaName, ...others } = teaOrder;
// others = {variety: 'oolong', origin: 'taiwan', hasCaffeine: true}
```

Real world example:

```
function checkout(tea) {
  const { quantity = 1, price } = tea
  return quantity * price;
}
```

#### Default Values

You can set default values that will be used if a property doesn't exist. If a property does exist, the default value is ignored and you get the property value.

```
const teaOrder = {
  variety: 'oolong',
  teaName: 'winter sprout',
  origion: 'taiwan',
  price: 12.99,
  hasCaffeine: true,
  quantity: 3,
}

const { brewTemp = 175, teaName = 'unknown' } = teaName
// brewTemp = 175
// teaName = 'winter sprout'
```

#### Renaming variables

If you want a variable with a name different than the property name, you can use the syntax `{ property: variableName }`

```
const { teaName: tea, brewTemp: temp = 175 } = teaOrder
// tea = 'winter sprout'
// temp = 175
```

### Array Destructuring

Since Arrays don't have `key: value` pairs, destructuring is purely based on position.

```
const students = [
  { name: 'Drake', gpa: 4.6},
  { name: 'Henrietta', gpa: 4.4},
  { name: 'Tung', gpa: 4.0},
  { name: 'Harry', gpa: 3.8},
  { name: 'Ant', gpa: 3.2},
];

// saves the first element in topStudent
const [ topStudent ] = students
// topStudent = { name: 'Drake', gpa: 4.6}
```

#### Skipping indicies

If you want to get only the 1st & 4th item, you'd still need commas for items 2 & 3, but can just leave the variable names blank.

```
// Grabbing 1st & 4th student
const [ firstStudent, , , fourthStudent] = students
// firstStudent = { name: 'Drake', gpa: 4.6 }
// fourthStudent = { name: 'Harry', gpa: 3.8 }
```

<sub>Note: While this is possible, it's probably more readable to just use `array[index]` to avoid having to count how many indicies are skipped.</sub>

#### rest

```
const [ first, ...losers ] = students;
// first { name: 'Drake', gpa: 4.6 }
// losers = [ {...}, {...}, {...}, {...}]
```

### Function Destructuring

When you know that a function will have an object passed to it with certain properties, you can just destructure in your function declaration.

Objects:

```
/// OLD METHOD
function getTotal(order) {
  let price = order.price;
  let quantity = order.quantity;
}

// DESTRUCTURING
function getTotal({quantity:qty = 1, price}) {
  return qty * price
}
```

Arrays:

```
const longJumpResults = [ 'Tammy', 'Jessica', 'Violet'];

function awardMedals([gold, silver, bronze]) {
  return {
    gold,
    silver,
    bronze,
  }
};
// {gold: 'Tammy', silver: 'Jessica', bronze: 'Violet'}
```

### Nested Destructuring

If objects are nested inside of other objects, you can access the nested object with `{ propertyName: {property1, property2}}`

```
const instructor = {
  id: 44,
  name: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  }
};

const { funFacts: {favoriteFood: food = 'Unknown', favoriteDrink: drink = "Water"}} = instructor
// food = 'Burrito'
// drink = 'Old Fashioned'
```

### Swapping Values

Destructing makes it very easy to swap the value of variables!

```
let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// OLD METHOD
let temp = delicious;
delicious = disgusting;
disgusting = temp;

// Destructuring
[disgusting, deliccious] = [delicious, disgusting]
// disgusting = 'Mayonnaise'
// delicious = 'Whipped Cream'
```

While this may seem pointless, swapping values is pretty common in algorithims, especially when sorting.

## Data Structures

**Data Structures** are formats for efficiently collecting/storing data. Pre ES2015, we only had **Arrays** and **Objects**. Post ES2015, we have **Maps** and **Sets**!

### Maps

**Maps** are similar to objects, but the keys can be any data type instead of just **Strings**. Even functions can be keys!

**Maps** also follow a set order. (Insertion Order). Accessing them will always follow this order, unlike with **Objects**.

#### Declaration

Making a new map requires using the `new Map()` syntax.

```
const myMap = Map();
```

You can also pass in `key: value` pairs when initilazing a **Map**. Doing so requires a specific format for your array. `[[key, value], [key, value], ...]`

```
const bandData = [
  [3, '3 Doors Down'],
  ['three', 'Three Dog Night'],
  ['nine', 'Nine Inch Nails'],
  ['four', 'The Four Seasons'],
  [41, 'Sum 41'],
]

const bandMap = new Map(bandData);
```

#### set

Adding to a **map** requires the `set()` method.

```
myMap.set(7, 'seven');
```

It's important to note that `set()` returns the entire map, meaning you can chain `set()` calls!

```
myMap.set(8, 'eight').set(9, 'nine');
```

#### get

Getting entries from a **map** requires the `get()` method.

```
myMap.get(7) // 'seven'
```

<sub>Remember that Arrays and Objects are **Reference Types**, so you need the exact same array/obj when they are set as keys.</sub>

#### has

Checks if the **map** has a provided key.

```
myMap.has(7) // true
```

#### delete

Deletes a `key: value` pair from the **map**.

```
myMap.delete(9);
// myMap {7 => 'seven', 8 => 'eight'}
```

#### keys

Returns a **MapIterator** with all of the keys. You can further spread the **MapIterator** in order to get an array of keys.

```
myMap.keys();
// {7, 8}

[...myMap.keys()];
// [7, 8]
```

#### values

Values returns the same, just with the Map's values.

```
myMap.values();
// {'seven', 'eight'}

[...myMap.values()];
// ['seven', 'eight']
```

#### clear

Calling **clear** will completely empty out a **Map**.

```
myMap.clear();
// {}
```

#### Spreading Maps

Spreading a map gives you an array of key, value arrays. (Same format used when declaring a new Map).

```
const mapData = [...myMap];
// [ [7, 'seven'], [8, 'eight'], [9, 'nine'] ]
```

#### Iterating over Maps

You can iterate over maps with `for..of` as well as their built in `forEach` method.

##### forEach

It's important to note that `Map.forEach` arguments are reversed. **val** comes before **key**!

```
myMap.forEach((val, key) => {
  console.log(`${key} => ${val}`)
})
```

##### for..of

`for..of` will return arrays of `key, value` pairs!

```
for(let x of myMap) {
  console.log(x);
}
// [7, 'seven']
// [8, 'eight']
```

As x is an Array of a `key, value` pair, we can access it directly with **destructuring**.

```
for (let [key, value] of myMap) {
  console.log(`key: ${key}, value: ${value}`)
}
// 'key: 7, value: 'seven'
// 'key: 8, value: 'eight'
```

#### When to use Maps

- Finding the size is easy using `map.size`. (Objects requires looping or Object.keys())
- If you need your keys to be something other than a **String**

### Sets

**Sets** are a similar to Arrays, but they only store unique values. Much like **Maps** you can store any type of value in a **Set**.

Because of the way **Sets** are implemented, they are VERY quick for operations like `add`, and `has`, making them very efficient for filtering, etc.

```
function filterHashTags(tags) {
  const bannedHashTags = new Set(['#nofilter', '#justsaying', '#winning', '#yolo']);
  return tags.filter((tag) => !bannedHashTags.has(tag));
}
```

Since sets don't allow duplicates, its also an easy away to remove duplilcates from an array.

```
const ages = [45, 45, 46, 46, 47, 47, 47];
const noDupes = [...new Set(ages)];
// noDupes = [45, 46, 47]
```

#### Declaration

You can declare an empty set with the `new Set()` syntax. Alternatively, you can pass in a single iterable.

```
// Empty Set
const bannedHashTags = new Set();

// Set with provided values
const bannedHashTags = new Set(['#nofilter', '#justsaying', '#winning', '#yolo']);
```

#### add

**add** is used to add an item to a Set. If a Set already possesses the value, it won't be added again. **Add** also returns the full set, allowing chaining.

```
const pokemonCards = new Set(['bulbasaur', 'charizard']);

pokemonCards.add('pikachu').add('vulpix');
// {'bulbasaur', 'charizard', 'pikachu', 'vulpix'}
```

#### has

**has** is used to check if a set has a specific value.

```
bannedHashTags.has('#tbt') // false
```

#### delete

Used to **delete** an item from a set.

```
bannedHashTags.delete('#yolo');
```

#### clear

Completely **clears** out all values from a set.

```
bannedHashTags.clear();
```

#### When to use Sets

- Removing duplicate values
- Uniqueness required.
- Efficiently checking if an item is in a collection.
  - Arrays have to loop over every single item, whereas a set takes about the same time to check regardless of its size.
