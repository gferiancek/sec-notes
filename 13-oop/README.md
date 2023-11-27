# OOP

**Object-Oriented Programming** (OOP) is a programming model that organizes design around modeling your data in objects.

## Objects (POJO)

```
// Declarations
let obj1 = {}
let obj2 = new Object();

// Accessing properties
obj1.color = "red";
obj1[size] = 'large';
```

<sub> Remember, with bracket notation, the contents are evaluated, meaning you can use a varible's value as your key </sub>

### this Intro

**this** is a handy notation that allows you to reference an object's own properties/methods, making working with the object far easier.

```
// Manually tracking triangle
let side1 = 3;
let side2 = 4;
const getHypotenuse = (a, b) => Math.sqrt((a**2) + (b**2));
const getArea = (a, b) => (a * b) / 2;
side3 = getHypotenuse(side1, side2);
```

The above _works_, but what if you wanted to change a side? Then you need to update that variable, and then also recalculate `side3`.

```
// Using Object + this
const rightTriangle = {
  side1: 9,
  side2: 12,
  getHypotenuse() {
    return Math.sqrt((this.side1 ** 2) + (this.side2 ** 2));
  },
  getArea() {
    return (this.side1 * this.side2) / 2;
  },
}
```

<sub> As a reminder, **don't** use `=> functions` in an object, especially when using `this`</sub>

The above is a definite improvement, as now we only need to manage our rightTriangle const instead of a ton of different variables. The main issue is that it's simply an object. What if we wanted a second triangle, or one that wasn't a right triangle?

### Constructor Functions

Constructor Functions can be used with `new` to create new instances of an object. (`new` will create an empty object, and then pass the `this` context over to the constructor function.)

```
function Triangle(a, b) {
  this.a = a;
  this.b = b;
  this.getArea = function() {
    return (this.a * this.b) / 2;
  }
  this.getHypotenuse = function() {
    return Math.sqrt((this.a ** 2) + (this.b ** 2));
  }
}
const myTriangle = new Triangle(9, 12);
const tinyTriangle = new Triangle(3, 4);
```

Seems great, right? Thankfully, there's an even easier way with ES2015 `Classes`, but we'll touch on that soon.

### Prototypes

**Prototypes** are objects that store functionality of an object that can be used by any instance. (Try going into the console and looking at a `Set`. It has no methods. Then check out `Set.prototype`).

In our Constructor example, we're adding our `getArea()` and `getHypotenuse()` functions on **every** single instance, instead of defining them once on a **Prototype** and then access them from there.

While not suggested, you could override Array.prototype and the functionality would be changed for \*_all_ arrays, where in our above example, it ould only be in the specific instance.

```
function Triangle(a, b) {
  this.a = a;
  this.b = b;
}

Triangle.prototype.getArea = function() {
    return (this.a * this.b) / 2;
  }
Triangle.prototype.getHypotenuse = function() {
    return Math.sqrt((this.a ** 2) + (this.b ** 2));
  }
```

This highlights another benefit of **classes**. They allow us to group all of our properties/methods together, while still properly setting up a prototype.

## Classes

Classes serve as a "blueprint" for a set functionality.

```
class Triangle {
  // Do stuff
}

const myTriangle = new Triangle()
```

### constructor

While the above class is great, it doesn't have any properties so we'd have to manually set them for each instance! We can easily fix that with constructors.

```
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  ...
}

const myTriangle = new Triangle(3, 4, 5);
```

As a note, `constructor()` is run automatically when instatiating an object, so its not something we have control over. Due to this, you should **NEVER** return from `constructor()`.

```
constructor(a, b, c) {
  for (let side of [a, b, c]) {
    if (!Number.isFinite(side) || side <= 0) {
      throw new Error('Invalid Side') // GOOD
      return 'Invalid Side'; // BAD
    }
  }
}
```

### Methods

**Methods** can be definied anywhere inside of your class, and they have full access to the class' properties and even the other methods.

```
class Triangle() {
  constructor(a, b, c) {
    ...
  }
  getArea() {
    // Destructuring shorthand to avoid writing this.a, this.b, etc.
    const { a, b, c} = this
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() >= 50;
  }
}
```

### Inheritance

Inheritance is used to make a **more specific** version of a given class. Say we wanted a RightTriangle class. We can do this with the `extends` keyword.

#### super

`super` is a keyword that references the parent, or super, class. This lets us use the parent's functionality without rewriting code. While inside of the constructor, it's important to note that you **must** call `super()` before assigning any additionaly properties with `this`.

```
class RightTriangle extends Triangle {
  constructor(a, b, c) {
    if (((a ** 2) + (b **2) !== c ** 2)) {
      throw new Error('Invalid Hypotenuse!')
    }
    super(a, b, c);
    this.hypot = c;
  }
}

const rightTriangle = new RightTriangle(3, 4, 5)
rightTriangle.isBig() // false
```

Note that we only needed to include new logic. Even though we didn't define `isBig()`, we're still able to use it! However, if we did want to overwrite a function, that is possible too.

#### Overwriting Methods

```
class Triangle {
  ...
  display() {
    return 'This is a triangle.'
  }
}

class RightTriangle extends Triangle {
  ...
  display() {
    return `${super.display()} More specifically, a Right Triangle.`
  }
}
Triangle.display() // 'This is a triangle.'
RightTriangle.display() // 'This is a triangle. More specifically, a Right Triangle.'
```

## this

As noted above, `this` is a keyword that refers to an instance of an object/class. However, it's easy to get mixed up on what exaclty `this` refers to. As an example:

```
const blue = {
 name: 'Blue',
 breed: 'Scottish Fold',
 dance(style) {
   console.log(`Meow, I am ${this.name} and I like to ${style}.`)
 }
}

blue.dance('salsa') // expected outcome

const blueDance = blue.dance
blueDance('salsa') // this.name is undefined!
```

The reasoning behind `blueDance()` not working like is expected lies in the idea that JS doesn't truly have 'functions'. Everything is treated like a method and is called on some object, whether or not you're aware.

In JS' case, if you call a function, and not a method, it is actually called on the `window` object! Since `window.name` doesn't exist, we get undefined when calling `blueDance()`. `this` isn't decided until a function is run, so its important to keep that in mind when passing functions around.

```
const blueDance = blue.dance;

// These two calls are identical!
blueDance('salsa')
window.blueDance('salsa')
```

<sub>Technically, since we aren't using `var`, `blueDance()` doesn't _actually_ exist on the window so the second call won't work, but you get the idea!</sub>

### Strict Mode

**Strict Mode** was introduced to help prevent silent errors, like the above `this` scenario. You can enable it with `'use scrict'` at the top of your JS file.

In terms of changes to `this`, `this` will always be `undefined` unless context is specified. (aka, no random attachments to the `window`.) `Classes` and `Modules` run in **strict mode** by default.

<sub>Full list of [strict mode changes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)</sub>

### call

`call` is used to specify an object to call a function on. `call` is a one-time call, so it's great if you are only performing an operation once.

```
function.call(context, ...) // Any argument passed after context are passed into the function call.

const blueDance = blue.dance;
blueDance.call(blu, 'tango');
// 'Meow, I am a Scottish Fold and I like to tango.'

const dog = {
  breed: 'Husky',
  name: 'Sammy';
};
blueDance.call(dog, 'salsa');
// 'Meow, I am a Husky and I like to salsa.'
```

### bind

Unlike `call`, `bind` is used to permanantly **bind** a context to `this`. `bind` doesn't actually call the function and instead returns a new function with a bound context.

```
const boundDance = blueDance.bind(blue);
boundDance('salsa')
// 'Meow, I am a Scottish Fold and I like to salsa.'

const dog = {
  breed: 'Husky',
  name: 'Sammy',
  dance: boundDance,
};
dog.dance('tango')
// 'Meow, I am a Scottish Fold and I like to tango.'
```

Note how `dog.dance()` still uses the bound context of `blue`.

#### binding arguments

`bind` can also be used with additional arguments.

```
function.bind(context, ...)
// All args will be permanantly passed into function.

function applySalesTax(taxRate, price) {
  return price + (price * taxRate);
}

// null means we don't care about this and aren't passing a context.
const applyCATax = applySalesTax.bind(null, 0.0725)
applyCATax(19.99) // 21.439
```

`applyCATax()` has the taxRate permanantly set to 0.0725, meaning taxRate is removed from the arguments. It's now the equvalent of:

```
applyCATax(price) {
  return price + (price * 0.725)
}
```

#### binding callbacks

A common use-case for binding callbacks is during eventListeners, as it allows us to pass arguments to the function!

```
const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');

function popup(msg) {
  alert(`Secret message is: ${msg}`);
}

// Without bind
btnA.addEventListener('click', function() {
  popUp('Button A says hi!')
})
btnB.addEventListener('click', function() {
  popUp('Button B says hi!')
})
btnC.addEventListener('click', function() {
  popUp('Button C says hi!')
})

// With Bind
btnA.addEventListener('click', popUp.bind(null, 'Button A says hi!'))
btnB.addEventListener('click', popUp.bind(null, 'Button B says hi!'))
btnC.addEventListener('click', popUp.bind(null, 'Button C says hi!'))
```

### Arrow Functions

We've previously specified that we should **NOT** use arrow functions with `this`, but... that isn't entirely true.

We now know that functions are always treated as methods; they're always called on an object, even if not specified. The issue with arrow functions is that they prevent `this` from getting assigned.

```
const greeter = {
  msg: 'I like chickens'
  sayHi: () => {
    console.log(this)
    alert(this.msg);
  }
}
greeter.sayHi() // this === window
```

In the above scenario, we want `sayHi()` to be bound to the greeter object, so an Arrow Function isn't ideal.

```
const greeter = {
  msg: 'I like chickens',
  waitAndGreet(delay) {
    setTimeout(function() {
      alert(this.msg);
    }, delay);
  },
};
greeter.waitAndGreet(2000); // undefined
```

In this example, `greeter.waitAndGreet()` sets our `this` to our greeter object. However, we don't call `setTimeout` on an object at all, so its `this` is set to the `window`! (And guess what, window doesn't have a `msg` property!)

```
const greeter = {
  msg: 'I like chickens',
  waitAndGreet(delay) {
    setTimeout(() => {
      alert(this.msg);
    }, delay);
  },
};
greeter.waitAndGreet(2000); // 'I like chickens'
```

Using an Arrow Function prevents `setTimeout()` from changing `this`, allowing us to keep our previously set context of `greeter`.
