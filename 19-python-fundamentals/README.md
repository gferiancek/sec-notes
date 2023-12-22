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

## Data Structures Intro

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

-   Always use `"""`, even if it's only one line.
-   Single line **docstrings** shouldn't just reiterate the function signature.
-   [Full List](https://peps.python.org/pep-0257/)

# Python Data Structures

## in keyword

Python has a handy `in` keyword that doubles as a looping mechanism as well as a way to check if any iterable (string/list/dictionary/etc) contains something.

```
vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']
pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

for food in pie_ingredients: // Looping through pie_ingredients
    if food in vegan_no_nos: // Checking if vegan_no_nos contains current item
        print(f"Oh no, you cannot eat {food}! It's not vegan!")
    else:
        print(f"Yum, I love {food}!")
```

## Reference Types

Much like JS, things like lists, dictionaries, and sets are **reference types**. Copies of an array will affect both variables, just like in JS.

```
nums = [1, 2, 3, 4]
copy = nums
copy.append(5)
print(nums) // [1, 2, 3, 4, 5]
```

## Lists

`Lists` are mutable, ordered sequences. (Equivalent of JS Arrays).

### BigO

Lists are O(n) to search / add / delete, unless you're checking the last item where it is O(1).

### Declaration

There are two ways to make a list, with the builting `list()` function, or by explicity stating the list.

```
// Explicit
scores = [45, 99, 100, 68, 78]

// List method
list('hello')
```

Note that the `list()` method takes an iterable and creates a list for each item. That means `list('hello)` would create a list of `['h', 'e', 'l', 'l', 'o']`.

### Bracket Syntax

Similar to JS, you can use **bracket notation** to access a specific index. You can also use negative indicies to pull from the back.

```
foods = ['taco', 'pizza', 'cheese curds']

foods[0] // 'taco'
foods[-1] // 'cheese curds'
```

Unlike JS, if you try and access an index that doesn't exist Python will throw an error. This also means you can't do something like `foods[3] = 'burrito'`. Since `foods[3]` doesn't exist, Python will throw an error.

#### Slicing

**Bracket notation** can be extended with a few additional parts to give more control of how you select from a list. The full syntax is `list[start:stop:step]`.

Note that `start` is inclusive while `stop` is not. Also, if `stop` is greater than the size of the list, it will grab the entire list (taking into account `step`, of course)

```
foods = ['taco', 'pizza', 'cheese curds', 'popcorn']
foods[1:3] // ['pizza', cheese curds']
foods[0:3:2] // ['taco', 'cheese curds']
foods[0:10] // ['taco', 'pizza', 'cheese curds', 'popcorn']
```

It's also worth noting that **slice** is not mutating the original list! It's slicing out a copy and returning it as a new list.

##### Shorthands

While there are 3 parts, any of them can be ommitted. Simply leave a value blank and put a `:` to move on to the next one.

```
nums = list(range(0, 100))

// Omitting start, grabbing first 10 items.
nums[:10] // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ommitting stop, grabbing everything after start.
nums[50:] // [50, 51, 52, 53, ..., 99]

// Ommiting stop, but declaring step
nums[0::2] // [0, 2, 4, 6, ..., 98]

// Omitting start/stop, but declaring step
nums[::10] // [0, 10, 20, 30, ..., 90]

// Ommitting start/stop, with negative step
nums[::-20] // [99, 79, 59, 39, 19]

// Slicing center in reverse order
nums[20:10:-2] // [20, 18, 16, 14, 12]
```

#### Splicing

**Splicing** uses the same syntax/shorthands as **slicing**, but instead of retrieving items, it's used to update / remove them.

```
colors = ['red', 'orange', 'yellow']

// Replacing Elements
colors[0:1] = ['dark red', 'light red'] // ['dark red', 'light red', 'orange', 'yellow']
colors[3:] = ['dark yellow', 'green'] // ['dark red', 'light red', 'orange', 'dark yellow', 'green']

// Removing Elements
colors[3:] = [] // ['dark red', 'light red', 'orange']
colors[0:1] = [] // ['light red', 'orange']
```

### Methods

As always, you can easily check the Python docs by using `dir([])` or for more info `help([])`. (If you want a more detailed description, you can use `help(list.method)`)

#### append

Append adds an item to the end of a list, however, it only takes one argument!

```
chickens = ['butters']
chickens.append('stevie') // ['butters', 'stevie']
chickens.append('henry', 'bob') // ERROR
```

#### copy

Copy creates a **new** list containing the contents of the old one. Much like JS, it will only make a shallow copy, so nested items aren't copied and instead uses the same reference.

```
copy_flock = chickens.copy()
copy_flock.append('henry') // ['butters', 'stevie', 'henry']
print(chickens) // ['butters', 'stevie']
```

#### count

Returns the number of times x appears in the list.

```
chickens.count('butters') // 1
```

#### extend

Extend appends provided iterable to the end of the list

```
chicks = ['herbert', 'annabelle']
chickens.extend(chicks) // ['butters', 'stevie', 'herbert', 'annabelle']
```

#### index

Returns the first index of provided value or a `ValueError` if not found.

```
letters = ['h', 'e', 'l', 'l', 'o']
letters.index('l') // 2
letters.index('y') // ValueError
```

#### insert

Adds an element at a particular index. `insert(index, item)`

```
chickens.insert(0, 'tina') // ['tina', 'butters', 'stevie', 'herbert', 'annabelle']
chickens.insert()
```

#### pop

Similar to JS, `list.pop()` will remove and return the last item. However, you can also pass in an index to remove/return at that index.

```
chickens.pop() // 'anabelle'
chickens.pop(0) // 'tina'
print(chickens) // ['butters', 'stevie', 'herbert']
```

#### reverse

Reverses the list in place and returns `None`. (i.e. mutates the list instead of returning a copy.)

```
chickens.reverse() // ['herbert', 'steview', 'butters']
```

#### sort

Used to sort a list, by default in ascending order. Sorts in place and returns `None`

```
nums = [0, 5, 2, 10, 23, 7]
nums.sort() // [0, 2, 5, 7, 10, 23]
```

You can also do reverse sort.

```
nums.sort(reverse=True) // [23, 10, 7, 5, 2, 0]
```

Note, that Python will throw an error if types aren't homogenous, such as a list with both `int`s and `str`s.

## Strings

Strings are **immutable** sequences of chars.

As a recap, you can use `''`, `""`, and for multiline `"""`. You can also use f Strings. `f"You won {prize}!"`

### Str conversions

You can use the `str()` method to convert something into a string.

```
str(3) // '3'
str([1, 2, 3]) // '[1, 2, 3]'
```

### Membership / Substrings

Like noted in the general part of the notes, you can use `in` to check membership. (i.e. if the `str` contains a given char)
`'e' in 'abcd' // False`

Also, very similar to `list`s, you can use the `slice` syntax! (Note, since strings are **immutable** you cannot use `splice`, though you can still reassign the variable.)

```
msg = "Hello world!"
msg[0] // 'H'
msg[5:] // ' world!'
msg[:5] // 'Hello'
msg[::2] // 'Hlowrd'
```

### Methods

#### count

Basically the same as `list.count()`, though it is important to note that it is `case sensitive`. If no matches are found, it returns `0`.

#### endswith / startswith

Used to check if a string starts/ends with a given string.

```
msg = "Hello world!"
msg.startswith('h') // False - Case Sensitive!
msg.endswith('world!') // True
```

#### find

Returns the index of the first match, or `-1` if no match is found. (Note, this is contrary to `list.index` which returns a `ValueError`. Since `list[-1]` is the last index, Python can't return -1)

```
msg.find('o') // 4
```

#### isdigit

Checks if the entire string consist entirely of digits.

```
ex1 = 'Hello 4'
ex2 = '4'
ex3 = '345839543'
ex1.isdigit() // False
ex2.isdigit() / ex3.isdigit() // True
```

#### join

Takes an iterable and joins it into a string, with provided **separator** between each item. Note that you call `join` on the **separator**.

```
letters = ['h', 'e', 'l', 'l', 'o']
'|'.join(letters) // 'h|e|l|l|o'
```

#### casing

Python has multiple casing methods, such as `lower()`, `upper()`, `capitalize()` as well as `is` versions. (`islower()`, etc.)

#### replace

Replace is used to replace a str/substr within a string. By default, it replaces **all** occurances and returns the result as a new `str`.

```
things = 'apples-tomatoes-pickles'
things.replace('-', '=') // 'apples=tomatoes=pickles'

tweet = 'YOLO hahah omg #YOLO'
tweet.replace('YOLO', 'selfie') // 'selfie hahah omg #selfie'
```

It also has an optional `count`, which can be used to limit how many replacements are made. (The default is `-1`, which means replace all.)

#### split

Sister method of `join` and is instead used to turn a `str` into a `list`.

```
msg = "hello world"
msg.split(' ') // ['hello', 'world']
```

Unlike JS, you can't do `str.split('')`, as that will throw an error. Remember though, that you can just use `list(str)` for that though.

#### strip

Used to remove leading **and** trailing whitespaces. You can also optionally pass in `chars` to strip those instead, though it only strips the chars if they're at the start/end.

```
msg = '  Hello  '
msg.strip() // 'Hello'
```

## Dictionaries

Ordered mapping of `key: value` pairs, which are mutable. They're very similar JS Maps. `Dictionary` keys can be more than just `str`s, but they must be an **immutable** type. (`Number`, `String`, `Boolean`, `Tuple`, etc)

**In the past, Dictionaries were NOT ordered**. Older docs/tutorials might say they aren't ordered, but they are ordered by insertion order.

### BigO

Due to how they are constructed, they are O(1) for insertion, deletion, and retrieval.

### Declaration

The syntax is very similar to JS' `object literals`, with one important difference. Since JS objects always have string keys, something like `{ person: 'Gav' }` works, as JS will automatically convert the key to a string.

Since Python allows more than just strings as keys, you have to specify your type.

```
chicken = { 'name': 'butters', 'age': 42, 'breed': 'Silkie' }
stuff = { True: 34, 100: 'AWESOME' }
```

You can also use the `dict()` method which will create an empty `dictionary`. You can also supply items to it, but they must be pairs of two, such as `dict(['key', 'value'], ['key2', 'value2'])`. This is easier with `tuples` which we'll learn about soon.

### Membership / Retrieval

As you might guess, you can use `in` with dictionaries, but you can only use it to search for `keys`.

```
'breed' in chicken // True
'butters' in chicken // False
```

As for retrieval, you can use **bracket notation**, although there is no **dot notation**.

```
chicken['breed'] // 'Silkie'
```

However, when using this syntax if a `key` isn't found, Python will return a `KeyError`. To circumvent this, you can use the `get(key, default)` method. (If a key isn't found, the default will be provided. If there is no default, then None is returned.)

```
chicken.get('weight', '2lbs') // '2lbs'
```

### Looping

In Python, there are 3 ways to loop over a `dictionary`. Looping its `keys`, its `values` or its `items` (key/value pairs.)

```
chicken = {
    "name": "Lady Gray",
    "breed": "Silkie",
    "total_egg_count": 12,
    "egg_chart": {
        "M": True,
        "T": True,
        "W": True,
        "TH": True,
        "F": True,
        "S": False,
        "SU": True,
    },
    "coop_mates": ["Butters", "Stevie", "Henry"],
}

for key in chicken.keys():
    print(f"Key: {key}")

for value in chicken.values():
    print(f"Value: {value}")

for item in chicken.items():
    print(f"Item: {item}")
```

It's worth noting that `.keys()` and `.values()` don't actually return `list`s, even though they look very list like!

Also, `.items()` returns a `tuple`, which again, we'll talk about soon. Quite often though, we want to have the `key: value` pair separate, so we can **unpack** the `tuple`. (Again, we'll cover more later. It's similar to JS **destructuring**).

```
for (key, value) in chickens.items():
    print(f"Key: {key}, Value: {value})
```

### Adding items

Unlike `lists` we can add new items with **bracket notation**.

`chicken['sex'] = 'unsexed'`

### Methods

`Dictionaries` have some shared items with `lists`, such as `clear()` and `copy()`

#### pop / popitem

`pop()` works similar to lists, but it takes in a `key`, removes it, and returns the `value`.

`popitem()` will remove and return a `tuple` of a **random** `key: value` pair. (This could be useful if you had a dict of questions / answers and wanted to randomly select while ensuring you never had duplicates.)

#### fromkeys

`.fromkeys(iterable, value)` will create a new `dictionary` with each item in the iterable being a unique key with the supplied `value`.

```
{}.fromkeys('MTWTFS', True)
// { 'M': True, 'T': True, 'W': True, ... }
```

## Sets

Much like JS, they're Unordered, unique collection of items. Similar to `dict` keys, `set`s can **only** contain immutable types.

### BigO

Very quick, and O(1) for adding / retrieving / deleting.

### Declaration

`Set`s are created in almost the same way as `dict`s, just without key/value pairs.

```
languages = { 'ruby', 'python', 'javascript' }
```

You can also use the `set()` method, which will create a set from an iterable.

```
voted_languages = ['ruby', 'python', 'javascript', 'scala', 'ruby', 'python', 'python', 'scala']
set(voted_languages) // {'ruby', 'python', 'javascript', 'scala'}
```

### Membership

You guessed it, `in` is back!

```
'scala' in languages // False
'ruby' in languages // True
```

### Methods

#### add

Adds an item to a set, or ignores it if already present.

#### pop

Removes and returns a random set element, or a `KeyError` if the set is empty.

#### remove

If you want to remove a specific item, you can call `remove(item)`.

### Operations

Python `set`s have some handy operations not present in JS, at least not at the moment. These operations involve taking 2+ sets and doing some sort of operation (union, calulating difference, etc.)

For the following, assume we have these sets:

```
lemon = {"sour", "yellow", "fruit", "bumpy"}
banana = {"fruit", "smooth", "sweet", "yellow"}
```

#### union

Union will consolidate 2+ sets into a single set. You can use `union()` or the shorthand `|`

```
{1, 2} | {2, 3} // {1, 2, 3}
```

#### intersection

Intersection calculates what 2+ sets have in common, or where they **intersect**. You can use `intersection()` or the shorthand `&`.

```
{1, 2} & {2, 3} // {2}
```

#### difference

Difference will calculate the difference between two sets. **The order is IMPORTANT**. Difference takes the first set and returns everthing present in the first but not the second. You can use `difference()` or the shorthand `-`

```
{1, 2, 3} - {3, 4, 5} // {1, 2}
{3, 4, 5} - {1, 2, 3} // {4, 5}
```

#### symmetric difference

Symmetric difference will return a set of all items that only exist in a single set. (i.e. if you calculated the difference in both directions.) You can use `symmetric_difference()` or the shorthand `^`

```
{1, 2, 3} ^ {3, 4, 5} // {1, 2, 4, 5}
```

#### method vs shorthand

While the shorthands are convenient, they only work between `sets`. The methods, on the other hand, can take an interable and will convert it into a set.

```
banana = {"fruit", "smooth", "sweet", "yellow"}
orange = ['fruit', 'bumpy', 'orange', 'sweet']

banana & orange // TypeError
banana.intersection(orange) {'fruit', 'sweet'}
```

### Looping

Like `lists` and `dicts`, `sets` are iterables! Iterating is similar to the above data structures.

```
for adj in lemon:
    print(adj)
```

However, you can level up your loops by combining them with operations!

```
for adj in lemon ^ set(orange):
    print(adj)
```

## Tuples

Tuples are ordered collections similar to `lists`, except they are **immutable**.

### Declaration

Tuples are declared like `sets`, `lists`, and `dicts`, except they use `()`.

```
colors = ('red', 'yellow', 'green')
```

One exception is that you can't use the literal syntax for a single item `tuple`.

```
tup = (3) // Python makes this an int, as it's the same as parenthesis operations (1 + 2), etc.
tup = (3,) // comma lets Python know that this is a tuple.
```

You can also use the `tuple()` method to turn an iterable to a `tuple`.

### Reasons for tuples

-   Slightly smaller, and faster than lists.
-   Since they're **immutable**, they can be used as `dict` keys or put into a `set`. (Remember, `lists` are mutable, so they cannot!)

A practical usecase is for making a board for a game like tic-tac-toe.

```
board = {
    (0,0): 'X',
    (0,1): None,
    (0,2): 'O',
    (1,0): 'O',
    (1,1): None,
    (1,2): None,
    (2,0): 'X',
    (2,1): None,
    (2,2): 'X',
}
```

It's very easy to see the link between the `tuple` (0,2) and it's position on a game board. In JS, we'd need nested lists, whereas in Python we can just pass coordinates.

## Comprehensions

Comprehensions are a feature that can be used on `lists`, `dicts`, and `sets` and is like a combination of `filter()` and `map()` in JS.

The full syntax for Comprehension is `[value_to_append for_loop optional_condition]` where `[]` simply refers to the type of Comprehension. (`{}` for `dicts`, `()` for `sets`)

Keep in mind that the names, such as `List Comprehension` don't mean your iterating over a list. It means you're **making** a list, and any sort of iterable can be used.

### Lists

Say we want to take a list and **double** every value in it. Using our pseudo code syntax from above:
`[]` is the syntax for making a new list.
`num * 2` is the new value we want to append.
`for num in numbers` is the loop
And technically, we don't need a condition, since we want to affect **all** items.

```
nums = [1, 2, 3, 4]
doubled = [num * 2 for num in nums] // [2, 4, 6, 8]
```

Say you had a `list` of `ints` and wanted to create a new list with only the even numbers.

```
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

#  Without Comprehensions
evens = []
for num in evens:
    if num % 2 == 0:
        evens.append(num)

# With Comprehension
comp_evens = [num for num in nums if num % 2 == 0]
```

As noted above, your iterable can be anything! Say we were iterating over a `dict`:

```
chickens = [
    {"name": "Henry", "sex": "Rooster"},
    {"name": "Lady Gray", "sex": "Hen"},
    {"name": "Junior", "sex": "Rooster"},
    {"name": "Stevie Chicks", "sex": "Hen"},
    {"name": "Rocket", "sex": "Hen"},
    {"name": "Butters", "sex": "Rooster"},
]

hens = [bird["name"] for bird in chickens if bird["sex"] == "Hen"]
// ['Lady Gray', 'Stevie Chicks', 'Rocket']
```

#### Nested Comprehensions

Say you want to create something like a `3x3 board` for a game.

```
[[0 for x in range(3)] for y in range(3)]
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### Complex Conditionals

It's worth noting that the `optional_condition` in the normal syntax can only be an `if` statement. However, if we change the syntax a little bit, we can do branching `if else` conditions.
`[if_value if ... else else_value for_loop]`

```
scores = [ 89, 60, 70, 50]
grades = ['PASS' if score >= 70 else 'FAIL' for score in scores]
// ['PASS', 'FAIL', 'PASS', 'FAIL']
```

### Functions in Comprehension

Say you have a `dict` of moorse code and want to use a function to extract the proper moorse code for a given letter.

```
def get_letter(ltr):
    morse_lookup = {
        'A': '.-', 'B': '-...', 'C': '-.-', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
        'Z': '--..', '1': '.---', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '0': '-----', ',': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.',
        '_': '-....-', '(': '-.--.', ')': '-.--.-',
    }
    return morse_lookup.get(ltr.upper(), '')

def get_morse_code(phrase):
    return ' '.join([get_letter(char) for char in phrase])

get_morse_code('SOS') // '... --- ...'
```

### Dictionary Comprehensions

The syntax is very similar to lists, except we use `{}` and for the `value_to_append` we need to supply a `key: value` pair.

```
egg_counts = {day:0 for day in 'MTWRFSU'}
// {'M': 0, 'T': 0, 'W': 0 ...}

even_doubles = {num: num * 2 for num in range(5) if num % 2 == 0}
// {0: 0, 1: 2, 3: 6, 4: 8}
```

### Set Comprehensions

Exact same syntax as `dict comps` but instead of a `key: value` we just pass in the `key`. (Basically, `value_to_append` from the list example.)

```
unique_letters = {char for char in 'abracadabra'}
// {'a', 'b', 'c', 'd', 'r'}

cons = {char for char in 'Hello darkness my old friend' if char not in 'aeiou'}
// {' ', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'y'}
```

# Python Tools & Techniques

Not similar, but the following are a collection of useful tidbits present in Python.

## Packing / Unpacking

Similar to JS **destructuring**, Python has (Un)Packing.

### Unpacking

**Unpacking** is used to extract values from **any** iterable.

```
names = ['charlie', 'lucy']
name1, name2 = names
// name1 = 'charlie', name2 = 'lucy'
```

You can also grab a few variables and then collect the rest using `*`. Regardless of the iterable you're unpacking, `*` will always be a `list`.

```
sorted_scores = [2400, 2350, 2100, 1960]
top_score, *scores = sorted_scores
// top_score = 2400
// scores = [2350, 2100, 1960]
```

#### Nested Unpacking

Given the following variable: `points = (40, 50, 20)`
When we're unpacking, such as `x, y, z = points`, Python is doing the equivalent of `(x, y, z) = (40, 50, 20)`. We can leave off the **parens** as Python understands and will do it for us.

However, this becomes an issue when things get nested, so we need to explicity add the parens.

```
color_pairs = [['red', 'green'], ['purple', 'orange']]

pair1, pair2 = color_pairs
// pair1 = ['red', 'green']
// pair2 = ['purple', 'orange']

((primary1, secondary1), (primary2, secondary2)) = color_pairs
// primary1 = 'red', secondary1 = 'green'
// primary2 = 'purple', secondary2 = 'orange'
```

#### Common Use-Cases

The most common place to see **Unpacking** is within a for loop, specifically when looping over dictionaries. (**Unpacking** lets you access both the `key` and `value` separately.)

```
grades = {'A': 12, 'B': 19, 'C': 30}

// Accessing with for loop
for pair in grades.items():
    print(pair)

// With Unpacking
for (k, v) in grades.items():
    print(k, v)
```

### Packing (Spreading)

#### Spreading

Similar to how we used `*` in **Unpacking**, we can use it to **spread** out an iterable.

```
evens = [2, 4, 6, 8]
[-2, 0, *evens] // [-2, 0, 2, 4, 6, 8]

odds = [1, 3, 5, 7]
[*odds, *evens] // [1, 3, 5, 7, 2, 4, 6, 8]
```

However, when it comes to `sets/dicts` there is an important distiction. Since both a `set` and `dict` use `{}`, you need to use `**` to indicate you want a `dict`.

```
rainfall = {'Jan': 2.5, 'Feb': 4.9}

// Set
{*rainfall} // {'Jan', 'Feb'}
{*'hello'} // {'h', 'e', 'l', 'o'}

// Dictionary
{'Dec': 0.5, *rainfall} // ERROR
{'Dec': 0.5, **rainfall}
// {'Dec': 0.5, 'Jan': 2.5, 'Feb': 4.9}
```

It's worth noting that with `dicts` if there's a duplicate key, the **most recent** one will stick.

```
{'Jan': 1.0, **rainfall} // {'Jan': 2.5, 'Feb': 4.9}
{**rainfall, 'Jan': 1.0} // {'Jan': 1.0, 'Feb': 4.9}
```

#### Packing Function args

**Packing** also uses the `*` operator, and is most useful in function arguments.

```
nums = [2, 4, 6, 8]
print(nums) // [2, 4, 6, 8]
print(*nums) // 2 4 6 8 (Each printed individually)
```

```
def multiply_sum(multiplier, *nums):
    return multipllier * sum(nums)

multiply_sum(4, 1, 2, 3, 4)
// 40 -- 4 * sum((1, 2, 3, 4))
```

## Exception Handling

Contrast to JS, Python is very **explicit** with its errors. There's no returning `NaN` or `undefined`. If something can't be done, Python will make sure you're aware by throwing an error.

While neither approach is specifically wrong, Python's take means we'll have to worry about error handling more than in JS.

### Catching Exceptions

Say we had a function to calculate the number of days you've been alive.

```
def get_days_alive(person):
    days = person['age'] * 365
    print(f"You have been alive for {days} days")

get_days_alive({'age': 50})
// "You have been alive for 18250 days"
```

#### LBYL

However, what if a `dict` isn't passed in? What if it doesn't have an `age` attribute? Python will throw an `Error`.

We could write code to predict errors, such as:

```
if 'age' in person and 'name' in person:
    // Do stuff.
```

This is known as **LBYL** (Look Before You Leap).

#### EAFP

**LBYL** inherently wrong, but it is more Pythonic to use **EAFP** (Easier to Ask for Forgiveness than Permission).

**EAFP** uses Python's `try: except:` to catch and handle errors.

```
def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f"{person['name']} have been alive for {days} days")
    except KeyError as exc:
        print(f"Missing key: {exc}")
    except TypeError:
        print("Expected person to be a dict")
```

Python lets you chain mutliple `except:` blocks, so you can explicitly call and handle specific exceptions instead of all of them.

### Common Exceptions

|     Error      |              Description               |
| :------------: | :------------------------------------: |
| AttributeError | Couldn't find `attr`. (object.missing) |
|    KeyError    | Couldn't find `key` (dict["missing"])  |
|   IndexError   |  Couldn't find `index` (list[99999])   |
|   NameError    | Couldn't find `variable` (mispeld_var) |
|    OSError     |       OSError (r/w to file, etc)       |
|   ValueError   | Incorrect value (covert 'hey' to int)  |

### Raising Exceptions

Python makes it super simple to throw an exception with the `raise` keyword.

```
raise Exception // Exception!
```

However, you generally want to be as specific as possible. Don't ever raise just the base `Exception` class!

```
def catch_exception(dict):
    try:
        if 'age' not in dict:
            raise Exception('Missing key age')
    exception KeyError:
        // This won't catch the above Exception!

```

### Exception Handling Pattern

Generally, you want your logic to `raise` errors as soon as they occur and only use `try: except:` in a place where you can actually handle that error by retrying, displaying to user, etc.

As an example:

```
def bounded_avg(nums):
    """Returns avg of nums, but only accepts nums in range of 1-100"""

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside of bounds 1-100")

    return sum(nums) / len(nums)

def handle_data():
    """Process data from db"""

    # ages = get_ages(from_my_db)
    ages = [10, 40, 50, 99, 103]

    try:
        avg = bounded_avg(ages)
        print(f"Average was {avg}")
    except ValueError as exc:
        # exc is exception obect -- contains info on exception!
        print("Invalid age in list of ages")
```

`bounded_avg`'s job is simply to calculate the avg of a `list`, and isn't in charge of handling an error so it simply `raise`s one.

`handle_data` will take the ValueError and do something with it. You might want a different action for `bounded_avg`'s ValueError depending on where you're calling it. What if `bounded_avg` was in a library? Shouldn't the user decide what to do with the `exception`?

## Docstrings & Doctests

We've alredy seen **Docstrings**, but as a review, you can declare them at the top of any file/class/func/etc. with `"""`. Calling `help()` on that item will then display the docstring.

```
def bounded_avg(nums):
    """Returns avg of list nums, but only accepts
    nums in range of 1-100"""
    # Note the docstring must be at the TOP!

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside of bounds 1-100")

    return sum(nums) / len(nums)
```

### Writing Doctests

However, Python also supports built in tests inside of your docstrings! The syntax follows the builtin Python interpreter:

-   `>>>` is used to start a new test.
-   `...` is used for multiline. Say you need to set up a variable, and then call a function, etc.

```
def bounded_avg(nums):
    """Returns avg of list nums, but only accepts
    nums in range of 1-100

    >>> bounded_avg([2, 4, 6])
    4.0
    """

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside of bounds 1-100")

    return sum(nums) / len(nums)
```

After your test declaration, simply write the expected value on the next line.

You can also write tests that expect an exception by writing the first line of the stacktrace, `...`, which makes python ignore everything else, and then you put the expected Exception.

```
>>> bounded_avg([1, 53, 200])
Traceback (most recent call last):
    ...
ValueError: Outside of bounds 1-100
```

The helpful thing about these **doctests** is that they're also displayed when calling `help()`, so the user sees some example use cases.

### Running tests

Once your **doctests** are written, you can run them with the command:
`python3 -m doctest -v filename.py`

This will run all doctests in the file, tell what passed/failed/etc.

It's worth noting that the `dir` you run the command from is where the test runs. (If you're trying to access other files, etc. Their path must be relative to the `dir` you ran the test command, not the `dir` the file is in.)

## Standard Library & Importing

Very similar to working with **Android**, Python has a large standard library where you can import specific modules to add in helpful features.

Check out the [docs](https://docs.python.org/3/library/index.html) for a full list. (Anything with `module_name --- ` is something that needs to be imported.)

### Importing a module

Lets use Python's `math` module as an example. Say you wanted to use `ceil()` on a number.

```
ceiling = math.ceil(10.7) // NameError !!
```

`math` is inaccessible to us, unless we first `import` it.

```
import math
ceiling = math.ceil(10.7) // 11
```

### Importing module functions

Maybe you don't need a whole module and just a single succulent function is calling your name? Welcome in the `from` keyword!

```
from math import ceil
ceiling = ceil(10.7) // 11
```

Not only does this save you from adding necessary bloat to your project, but it also adds that function to your namespace. (Meaning, you can just call it directly insted of `module.function()`)

#### Alias

You can also rename imported module functions if you desire using the `as` keyword.

```
from math import ceil as round_up
round_up(10.7) // 11
```

As an alternative to importanting an entire module, you could do `from module import *` which would import every function individually so they're all namespaced to your file/project/etc.

### Module Examples

#### random

In JS, we could simply use `Math.random()`, however Python has an entire `random` module!

This has a ton of useful functions for randomness.

##### choice

Returns a random element from an `iterable`. If empty, it returns an `IndexError`. Although, it doesn't modify the iterable, so it doesn't present unique choices.

```
choice([1, 2, 3, 4]) // random element
```

##### sample

Returns a `k` length list of unique elements, which addresses the concern raise in `choice`.

```
sample([1, 2, 3, 4], k=2) // returns 2 random elements
```

It also has an optional arg, `counts` which can multiply the number of choices presented.

```
sample([1, 2, 3], counts=[3, 2, 4])
// sample pool is [1, 1, 1, 2, 2, 3, 3, 3, 3]
```

##### randint

Returns a random `int` from the specified range. It is **inclusive** on both sides.

```
randint(1, 100) // num from 1 - 100
```

#### Calendar

Calendar gives us access to the `Calendar` class. For easier notes, we'll use the `TextCalendar` class that is also provided.

```
import calendar

cal = calendar.TextCalendar()
cal.prmonth(2025, 4)
//      April 2025
// Mo Tu We Th Fr Sa Su
//     1  2  3  4  5  6
//  7  8  9 10 11 12 13
// 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27
// 28 29 30
```

### Sharing code between files

Thankfully, this is exactly the same as imporing `modules` from the standard library! (This is contrary to JS where you need to `export` files first.)

```
// helpers.py
from random import randint, choice

def get_rand_year():
    ...

def get_rand_month():
    ...

// people.py
from helpers import get_rand_year, get_rand_month

def make_person(name, fav_color):
    return {
        'name': name,
        'fav_color': fav_color,
        'birth_year': get_rand_year(),
        'birth_month': get_rand_month()
    }
```

## Third Party Libraries

While Python's **standard library** offers plenty of extras, it doesn't offer everything. That's where 3rd party libraries come in! (Hint: We've already used one, `ipython3`)

We've already covered installation with `pip3`, but we'll go into more detail here.

### pip

Besides `pip3 install` and `pip3 uninstall`, there's another useful pip command, `pip3 list` which will tell you what you've currently installed.

We'll use `forex-python` as an example here, so go ahead and install it with `pip3 install forex-python`

### Using Libraries.

Simply downloading a 3rd party library isn't enough. You need to `import` it~

```
from forex_python.bitcoin import BtcConverter

b = BtcConverter()

b.get_latest_price('USD') // 44116.9026
b.get_latest_price('JPY') // 5968119.1303
```

## venv

Packages installed by `pip3` are installed **globally**. This sounds nice, but new versions of packages can often break functionality.

Thankfully, **Virtual Environments** (venv) let us section off these packages/libraries to specific directories.

### Creating a venv

```
cd my-project-directory
python3 -m venv venv
```

<sub>Note: `-m venv` refers to loading the module `venv`. The second `venv` is the file name for the **Virtual Environment**, which is usually named venv.</sub>

### Using a venv

Once its created, we need to make sure we actually use it!

```
source venv/bin/activate
// Shell should update to start with (venv)
```

To leave the `venv`, you can simply type `deactivate`.

You only need to create the `venv` once, but you need to use the `source` command to activate it **every time you open your terminal**.

There are a few things to note about using a `venv`:

-   The `venv` uses whichever version of Python was used to create it.
    -   Normally, you need to type `python3` instead of `python` in order to access `python3` commands. Since the `venv` was made with `python3` though, `python` refers to `python3`.
-   In your `venv` you have access to Python's standar library.
-   You **don't** have access to globally installed `pip3` packages.

### Handling Dependencies

Our `venv` folders tend to get quite large, so we often don't want to share them.

We can easily exclude it by adding it to a `.gitignore` file.

```
// Top level of git repo
echo 'venv/' > .gitignore
```

Since we aren't sharing the `venv`, we need a way for people to replicate it on their machines.

#### Declaring Requirements

We use a `requirements.txt` file in order to list our exact packages/versions, so that anyone can easily run our project in the exact same environment.

You can use the `pip freeze` command to see all your package versions, and `pip freeze > requirements.txt` will output it to a .txt file.

<blockquote><b>Make sure you update your `requirements.txt` every time you install a new package!</b></blockquote>

#### Installing Requirements

Let's run through setting up a project on your machine. Colt uses the following repo, so let's clone it:
```
git@github.com:christarazi/ucl_draw.git
```

Afterwards, cd into the dir and create and activate a new `venv`.

```
python3 -m venv venv
source venv/bin/activate
```
Finally, we can use `pip` to install all of the requirements.
```
pip install -r requirements.txt
```
<blockquote><b>Note: Since we're using Python 3.10, the provided requirements.txt in the course will not work! As suggessted in Slack, try removing all of the `==x.x` and only keep the package names to get the most recent update. This should more or less work without issues.</b></blockquote>

## Files
We probably won't read/write to files much with web development often, but it's still nice to touch on the subject.

### Reading a File
First, we need to open up our file.
```
file = open(haiku.txt, 'r')
```
Since we're **reading** we passed in 'r' to `open`.

Once the file is open, we can easily loop through it.
```
for line in file:
    print(f"Line is... {line}")
```
We can also read the entire file in one go!

```
all_text = file.read()
```
<blockquote><b>Note, files in Python are kind of like a VCRTape. If we ran the all_text code after our for loop, the result would be empty! We need to 'rewind' the file!</b></blockquote>

```
file.seek(0) // beginning of file.
```
Most importantly, make sure you `close` the file!
```
file.close()
```

### Writing to a File
Like reading, we need to open our files first!
```
file = open('write-me.txt, 'w')
```
This time though, we passed in 'w' for `write`. Now we can write to the file!
```
file.write('Hello World!')
```
The only issue here.. is that we replaced everything that was originally in the file! You can use `file.append()` to add to the end of the file.

Also, if you open/write to a file that **doesn't** exist, Python will create it for you!

### with
Python has a handy `with block` which can help manage our files for us!
```
with open('haiku.txt', 'r') as file:
    for line in file:
        print(f'Line is... {line})
    
    # Inside with block, so file still exists.

# Outside with block, Python will automatically close out the file for us!
```
`with` can be used by many other things. Google `python context managers` for more info.