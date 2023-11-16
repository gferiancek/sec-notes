# Testing

At its core, testing is simply writing code to test the code you've already written.

While this may seem redundant at first, testing can/will save you a lot of time and effort if applied properly!

## Why We Test

- Manually testing software is tedious and error prone
  - In small programs we can manually check all pieces of functionality, but as the codebase grows it quickly becomes impossible to track everything.
- Writing tests also helps clarify the expectations of a function
  - We have to specify legal input/output
- Tests loosely form code documentation
  - Reading tests can help new developers understand the code base!
- Testing is a core skill, so the sooner you learn the better!

## Jasmine Setup

We will install Jasmine with CDN, allowing us to include it with link/script tags, much like adding a Google Font!

```
// Inside of your HTML file


// CSS for Jasmine
<link rel="stylesheet" href="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine.css">

// JS for Jasmine
<script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine.js"></script>
<script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine-html.js"></script>
<script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot0.js"></script>
<script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot1.js"></script>

// Add your JS & Test File
<script src="taxes.js"></script>
<script src="taxes.test.js></script>
```

Make sure that your test.js file is included AFTER the normal .js file!

## Naming Conventions

It's important to keep your code organized! Add your test file in the same directory that your JS file, with the following naming convention:

```
// JS File
some-file.js

// Test File
some-file.test.js
```

## Writing Tests

#### it(...)

**it** takes two arguments, the name of the test and a callback function containng the actual test.

```
it('should calculate low-bracket', function() {
  // unit tests
})
```

#### expect

**expect** contains the actual logic for our tests.

```
expect(someValue).someMatcher(...)

expect(calcuateTaxes(10000)).toEqual(1500)
```

### Matchers ([Full List](https://jasmine.github.io/api/edge/matchers.html))

#### .toEqual(obj)

Checks that the value is the same, using deep comparison. (That means it works with Reference Types, like lists and objects!)

```
expect(removeDupes([1,1,2,2,3,3])).toEqual([1,2,3])
```

#### .toBe(obj)

Similar to **toEqual** except it uses `===` instead of a deep comparison.

#### .toContain(obj)

Does object/array contain this item?

#### .not.

Used to invert matchers.

```
expect(8).not.toEqual(7) // true
```

#### .toThrowError(obj)

You need to do a little extra work when a function throws an error:

```
// Test Fails - As the Error is actually thrown!
expect(calulateTaxes('asdfsa')).toThrowError();

// Works as inteded
expect(() => calculateTaxes('asdfa')).toThrowError();
```

### Grouping Tests

With just **it** and **contain**, your test files/outputs will quickly become a mess as you add tests.

Thankfully, there is a way to group our tests together!

#### describe

```
describe('calculateTaxes tests', function() {
  // Test 1

  // Test 2

  // ...
})
```

### Test Cleanup

#### afterEach

This hook will run after every testcase and avoids manually doing your cleanup inside every single testcase.

```
afterEach(function () {
  // cleanup code
})
```

#### beforeEach

This hook runs before every test case, and is great for your initialization logic!

#### beforeAll/afterAll

These are similar to **beforeEach/afterEach**, except they only run a single time, before and after all tests.

```
beforeAll(function() {
  // Make a test Database
  // initilize mock sever
})

afterAll(function() {
  // tear down test server
})
```

### Testing Best Practices

#### Unit Testing / Integration Testing

- Unit Tests
  - narrow in scope; simple and easy to write
  - verify a module of code is doing what it is intended to do
  - Work well with **pure** functions.
- Integretion Tests
  - broader in scope; more complex and costly to maintain
  - verify that multiple modules of code are working together properly
  - Used to test **impure** functions with side effects.

#### Pure functions

A common JavaScript paradigm is to create **pure** functions, which are functions that do not have side effects on external variables and are easily testable through unit tests.

```
// Not Pure
function append(arr, val) {
  arr.push(val);
}

// Pure
function append(arr, val) {
  return [...arr, val]
}
```

#### What to test

- Test every function in at least one way
- Think about edge cases
  - empty list
  - non interger values
  - file not found
  - first/last case handled differently

#### Testable Code

- More & Smaller functions.
- Don't mix logic & UI in a single function

```
// Coupled / Harder to Test
function playTicTacToe() {
  //..
  let winner = checkForWinner();
}

function checkForWinner() {
  // code for checking board
  if (winner) {
    alert(winner + " wins!");
  }
  return winner;
}

// Logic / UI separate - Easier to test
function playTicTacToe() {
  // ...
  let winner = checkForWinner();
  if (winner) {
    announceWinner(winner);
  }

function checkForWinner() {
  // code for checking board
  return winner;
}

function announceWinner(winner) {
  alert(winer + " wins!");
}
}
```
