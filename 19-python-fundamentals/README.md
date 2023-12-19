# Python

Why Python?

-   Python is one of the most used Back-End Languages.
-   Clean Syntax, easy to write.
-   Very loved with a huge community.
-   Plenty of uses, such as servers, data science, machine learning, etc.
-   It's good to have more than one language under your belt! Once you learn your first one, the next one is easier to learn!

## PiP and Packages

While python does have a built in REPL you can use in the cli, there is a far better tool known as `ipython`. So then, how do we actually use this tool?

First, install `pip3`

```
sudo apt-get update
sudo apt install python3-pip
```

Now that we have `pip3` we can easily manage python packages.

```
pip3 install ipython // installs ipyton
pip3 uninstall ipython // uninstalls ipython
which ipython // gets version info
```

`IPython` has a ton of extra features, like code completion, `?` to view variable info, help, etc, and syntax highlighting!

```
python3 -m IPython // opens ipython
ctrl + d // exits ipython
```

## Indentation

In Python, code blocks aren't separated by `{}` like JS, but instead by Indentation.

```
// JS
if (age >= 18) {
  console.log("Please go vote");
  registerToVote();
}

// Python
if age >= 18:
  print("Please go vote")
  register_to_vote()
```

## Variables

Python variables are written in **lower-snake-case** `like_this`. (Note, we're not doing **camelCase** like in JavaScript!)

### Declaration

There is no `let`, `var`, or `const`. You just declare a variable.

```
chickens = 13 // creates chickens variable set to 13
chickens = 20 // reassigns chickens to 20.
chickens = "15" // reassigns to string of "15"
```

This is important, because Python only has this one way of declaring varialbes, meaning you can't actually make **constant** variables.

By convention, if you want a constant that **shouldn't** be changed, name it in all caps. `CONSTANT_VARIABLE`. However, just remember that that variable still can be updated!!!

### Scope

Variables are function scoped.

```
x = 42

def my_function():
  x = 12
  print(x) // 12

print(x) // 42
```

## Data Structures

Python has a few more data types when compared to JavaScript.

You can easily check the type of something using python's built in `type()` function.

```
type(9) // int
```

### Numbers

Python has two main types of **Numbers**, `int`s and `float`s.

`int`s, or **integers** are whole numbers.
`float`s are numbers with decimals.
`complex`, which have a real/imaginary part. We won't really touch on these.

When performing operations with different types, python will automatically return the proper type. (i.e. `1 + 1.5 // 2.5 float`)

#### Division

By default, using `/` will automatically convert `int`s into `float`s if necessary. However, using `//`, or integer division, will automatically floor the result and return an `int`.

Unlike JavaScript, **dividing by 0** will result in an error.

#### Conversion

Python also has handy methods for converting between numbers.

```
int(3.2) // 3
float(3) // 3.0
```

There are also some handy methods, such as `is_integer()`, `hex()`, etc.

#### Power

You can either use `**` or `pow()` to raise a number to given power.

```
3 ** 3 // 27
pow(3, 2) // 9
```

#### Rounding

Python has a handy function for rounding as well!

```
round(3.1246) // 3
round(3.1246, 2) // 3.12
```

### Strings

Just like JS, Both `''` and `""` are acceptable. There is also `''' / """` strings, allowing you to write multi-line strings. Line-breaks will automatically be converted to `\n`.

#### fStrings

Similar to JS, we can also use **String Interpolation**.

```
f"2+2={2+2}" // "2+2=4
```

The `f` denotes a **formatted** string, and any expressions are placed inside of `{}`.

### Lists

Lists in python are **heterogeneous**, meaning like JS **Arrays** you can have multiple data types within a single list.

#### Declaration

Very similar to JS, you can use `[]`.

```
nums = [1, 2, 3, 4, 5, 6]
```

### Booleans

Unlike JS, **Python** booleans are capitalized!

```
true // ERROR
True // Boolean
```

#### Comparison Operators

| Operation |         Meaning         |
| :-------: | :---------------------: |
|    `<`    |        less than        |
|   `<=`    |   less than or equal    |
|    `>`    |      greater than       |
|   `>=`    |  greater than or equal  |
|   `==`    |          equal          |
|   `!=`    |        not equal        |
|   `is`    |     object identity     |
| `is not`  | negated object identity |

Unlike JS, if you try and compare between types, such as comparing `'1'` to `1`, python will throw an error.

#### Equality

Unlike JS, there is no `===`. Python's `==` **is** strict equality.

For some Data Structures, like **lists**, Python's `==` will check the contents and not the reference.

```
[1, 2, 3] == [1, 2, 3] // True
```

This is pretty handy, as doing the same in JS isn't as simple. However, if you did care about comparing the reference / object identity, you can use the keyword `is`.

```
nums = [1, 2, 3]
copy = nums
nums is copy // True
nums is [1, 2, 3] // False
```

#### Boolean Operators

Unlike JS, Python has english keywords instead of symbols.

| JavaScript | Python |
| :--------: | :----: |
|    `&&`    | `and`  |
|   `\|\|`   |  `or`  |
|    `!`     | `not`  |

Though the keyword is different, they work exactly the same, including left to right short circuiting.

#### Truthiness

Python handles this slightly different than JS.

Falsy values:

-   `0`, `0.0`, `''`, `None`, `False` - Same as JS
-   `[]` (List), `{}` (Dictionary), `()` (Set) - Falsy **unlike** JS.

Note: `None` is Python's equivalent of `null`.

To highlight, empty structures are **falsy** which can be very handy!

```
jobs = ['Walk dog']

if jobs:
    print("Can't go home; there is work to do!")

// Evaluates to True
// If jobs was [], it would evaluate to False.
```

By Convention, your indentation should be `4 spaces`. (Note, VSCode will convert `tab` to `spaces`.)

## Running Python Code

Unlike JS, you Python doesn't run in the browser so running your files is a little different. There are two main ways, at least for now!

`python3 file.py` - executes code.
Inside `ipython`: `%run file.py` - Runs code inside `ipython`, letting you access variables, etc.

## Conditional Logic

### if, elif, else

These work the same as JS's **if**, **else if**, **else** blocks.

```
if age > 18:
  // do something
elif age > 45:
  // do something
else:
  // do something
```

### Ternary Operator

Similar to **Kotlin**, there is no **ternary operator**. However, you can similarly inline your `if/else` statements.

```
do_if_true if CONDITION else do_if_false
```

### Loops

To point out as a difference, Python does have `+=`, but doesn't have JS's `uniary operators (++ / --)`

You can also exit loops early with the `break` keyword.

#### While Loop

Much like JS, runs `while` the condition is true. Make sure to avoid infinite loops!

```
target = 37
guess = None

while guess != target:
    guess = input("Please enter a guess... ")
    if guess == 'q' or guess == 'quit':
        break
    guess = int(guess)

print("All done!")
```

#### For Loop

Python's `for` loops don't run like a traditional JS `for` loop. Instead, they're like the `for..of` loops.

```
for snack in ['Peanut', 'Twizzler', 'Mars Bar']:
    print(snack)
```

If you want to mimic the traditional 3 part `for` loop, you can use `range()`.

```
for num in range(10):
    print(num) // 0 - 9
```

#### Ranges

You can declare ranges in a couple ways.

```
range(stop)
range(start, stop)
range(start, stop, step)
```

Conveintly, Python doesn't save the entire range, just the **start**, **stop**, and **step** values. Meaning a `range(1)` and a `range(100000)` take the same amount of memory! The values inbetween are calculated when/if needed.

## Functions

Like variables, functions are also **lower-snake-case** and are defined using the `def` keyword.

```
def greet(person):
    return f"Hello there, {person}"
```

Note: If you don't `return` in a function, then Python will automatically return `None`.

### Arguments

Unlike JS, providing too many or two few arguments will throw an error!

```
def three_things(a,b,c):
    print("hi")

three_things(1, "a") // ERROR
```
Also, we're back to **Kotlin** territory because python has

#### NAMED ARGUMENTS!

```
def send_email(to_email, from_email, subject, body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        -------------------
        body: {body}
    """
    print(email)


send_email(
    subject="Named Arguments",
    from_email="gferiancek@gmail.com",
    to_email="colt@springboard.com",
    body="Wow, this is so great! This is one of my biggest pet peeve's about JavaScript!",
)
```
#### Default Arguments
Python also has default arguments. Note that they must be at the end of the paremeter list!
```
def power(num, pow = 2):
    return num ** pow

pow(2) // 4
pow(2, 3) // 8
```

## Getting Help
### dir()
`dir` will list out all of the attributes/methods of whatever is passed in. (Note, ignore `__method__`s for now.)

This is nice, as you can pass in `dir([])` or `dir('string')` to see all the list / string methods.

### help
Python has a builtin help utility, called with `help()`. It's kind of like having the docs inside your cli! 

You can call `help()` and then type keywords, or pass in something specific, like `help(print)` or `help([])`.

#### Docstrings
At the top of a class/file/function, you can use `"""` to make your own `help()` documentation!
```
def add_limited_numbers(a,b):
    """Adds two numbers and caps them at 100"""
    sum = a + b
    if sum > 100:
        return 100
    return sum
```
Common Conventions:
- Always use `"""`, even if it's only one line.
- Single line **docstrings** shouldn't just reiterate the function signature.
- [Full List](https://peps.python.org/pep-0257/)