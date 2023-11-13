# The DOM

The DOM (Document Object Model) is the programming interface for HTML. It is an Object representation of our HTML. (Starting with document, each tag is a JS Object that contains all of the children, granchildren etc tags/objects.)

The browser creates the DOM for each page it loads. While it is simply JS code, you can visualize it by opening a page and right click + inspect.

## DOM Structure

The following HTML

```
<html>
  <body>
    <h1>Giant Sequoia</h1>
    <p><i>Flavor Text</i></p>
  </body>
</html>
```

Would roughly result in the following:

```
{
  tag: 'document',
  content: [
    {
      tag: 'html',
      content: [
        {
          tag: 'body',
          content: [
            {
              tag: 'h1',
              content: ['Giant Sequoia']
            },
            {
              tag: 'p',
              content: [
                {
                  tag: 'i',
                  content: ['Flavor Text']
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
```

<sub>Note: The actual structure is much more complicated, and accessing that is addressed below.</sub>

# Document

The **document** object represents the web page that has been loaded. It is our "starting point" for access into the DOM.

The **document** object allows us to:

- Select elements
- Update elements/properties
- Create elements
- Listen for events, such as clicks

You can view the document object for any page by opening the console and typing:

```
console.dir(document)
```

<sub>Note: This command unfortunately shows us HTML instead of a JS Object. It's a mix of the HTML shown and the rough JS diagram from above.</sub>

## Selecting Elements

When selecting elements, you get a special object known as an **HTMLElement**. There are many different types that inherit from **HTMLElement**, such as **HTMLDivElement** or **HTMLParagraphElement**.

<sub>Note: Some tags, like \<section> or \<article> don't have specific types and are simply **HTMLElement**.</sub>

#### getElementById

```
document.getElementById("id");
```

Since ids aren't used everywhere, there are plenty of less specific selectors.

#### getElementsByTagName

```
document.getElementsByTagName("li");
```

<sub>Note how "Elements" is plural! It will return a list of objects.</sub>

When returning a list, we don't get an array but instead get a special list known as an **HTMLCollection**.

Since an **HTMLCollection** isn't an array, we cannot use array functions like push(), pop(), or forEach().

#### getElementsByClassName

```
// Single Class
document.getElementsByClassName("class");

// Multiple Class (elements must have all listed)
document.getElementsByClassName("class1 class2");
```

<sub>Note: Even if you get 0 or 1 results, you still get an **HTMLCollection** returned!</sub>

#### querySelector

querySelector is a catch all that lets you pass in a CSS Selector.

```
// Select by id
document.querySelector("#main");

// Select Element with Class
document.querySelector("h2.section-heading");

// Select Element with Attribute
document.querySelector("input[type='range']");
```

querySelector only returns the **first** element that matches.

#### querySelectorAll

```
// Select Element with multiple classes
document.querySelectorAll('h3.section-title.country');

// Select direct descendant
document.querySelectorAll('body > hr');

// Select with pseudo-class selector
document.querySelectorAll(':not(p)');
```

Much like querySelector, we can pass in any valid CSS Selector and find all matches.

querySelectAll returns a **NodeList**.

### Selecting within an Element

While all of the above examples used document, we can use our selectors on any HTML Element.

```
let form = document.querySelector('form');

let buttons = form.querySelectorAll('button');
```

### Selecting elements near another element

#### Accessing a Parent Element

```
const div = document.querySelector('div');
div.parentElement // <section></section>
```

Example use case:

```
<ul>
  <li>Click this <button>button</button> to remove me!</li>
  <li>Second li</li>
</ul>

const button = document.querySelector('button');
button.onClick(button.parentElement.remove());
```

<sub>Note: Click Events haven't been covered yet, so the onClick is pseudo code</sub>

#### Accessing Children

**children** will return an HTMLCollection with all the children!

```
const ul = document.querySelector('ul');
ul.children // [<li></li>, <li></li>];
```

We can also easily access the first/last child.

```
ul.firsElementChild
ul.lastElementChild
```

#### Accessing Siblings

You can easily get next/previous siblings with **nextElementSibling** and **previousElementSibling**.

```
<body>
  <div></div>
  <ul>
    <li></li>
  </ul>
  <p></p>
</body>

div.nextElementSibling // <ul></ul>
ul.previousElementSibling // <div></div>

// If nonexistant, you get null!
p.nextElementSibling // null

// Chaining is allowed!
div.nextElementSibling.nextElementSibling // <p></p>
```

#### Nodes vs Elements

Every object in the DOM is known as a **node**. Elements, such as \<li></li>, \<h1></h1>, etc are **nodes**, but **nodes** can also be other things like text or HTML comments.

> Every Element is a Node, but not every Node is an Element... or maybe it was squares and rectangles.
> ~Someone

In addition to **next/previousElementSibling** there is also **next/previousSibling**. The latter will move to the next **node**, which can have unexpected results!

## Update Elements/Properties

### Modifying Text

#### innerText

The easiest way to access text is using **innerText**, which grabs all human-readable text inside the Element.

```
const h1 = document.querySelector("h1");

// Accessing text
h1.innerText // "Giant Sequoia"

// Updating Text
h1.innerText = "Pine"

```

**innerText** will get the text of ALL elements, even children! For example:

```
<ol>
  <li>Text 1</li>
  <li>Text 2</li>
  <li>Text 3</li>
<ol>

const ol = document.querySelector("ol")
ol.innerText // "Text 1\nText2\nText3"
```

In this case, you can't easily update the text of the \<li> tags. Updating the \<ol> **innerText** would result in the following:

```
ol.innerText = "Hello Everyone"

// New HTML - The <li> tags are gone!
<ol>Hello Everyone</ol>
```

#### textContent

Unlike **innerText**, **textContent** is not aware of what is showing on the screen!

```
// Given the following HTML:
<section>
  <h1 style = "display:none;">Hidden</h1>
  <h2>I'm visible!</h2>
  <script>console.log("Hello")</script>
</section>

const section = document.querySelector("section");

// innerText
section.innerText // "I'm visible!"

// textContent
section.textContent // "Hidden\nI'm visible!\nconsole.log('Hello');"
```

Because **innerText** is smarter, it can sometimes be less performant than **textContent**. For now though, **innerText** is preferred!

### Modifying HTML

#### innerHTML

**innerHTML** can be used to copy html tags as well as text.

```
<ol>
  <li>Text</li>
</ol>

const ol = document.querySelector("ol");
ol.innerHTML // "<li>Text</li>"

ol.innerHTML = "<li><img src="link"></img></li>"
```

This isn't the preffered way to changing HTML though, as you need to include all tags inside a string, which is bothersome. There are also some security concerns. (Imagine a user adding a script into the page.)

### Modifying Properties

#### Style

```
const h1 = querySelector("h1");

// Accessing style
h1.style.color = "teal"

// Since we're using JS we need camelCase!
h1.style.backgroundColor = "pink"
```

<sub>Note: This style object only refers to the **inline** style. That means you can't pull css styles this way unless it's specified inline.</sub>

#### Modifying Multiple Elements

```
const imgs = document.querySelectorAll('img');

for (let img of imgs) {
  img.style.width = "100px";
  img.style.border = "2px solid green";
}
```

<sub>Note: If your JS depends on HTML elements, make sure \<script></script> tag is at the end of the body so that it runs **after** the content is loaded.</sub>

#### getAttribute + setAttribute

```
const input = document.querySelector('input')

input.getAttribute('type'); // text
input.setAttribute('type, 'password');
```

#### Direct Attribute Access

Some attributes have \*_direct access_.

```
const form = document.querySelector('form');
form.id // No need to use get/setAttribute!
```

This is particually important when it comes to the **value** attribute! It's common to read the **value** of all inputs within a form.

```
const range = document.querySelector('input[type="range"]')
range.value
```

### Manipulating Classes

Updating classes is one of the most common ways to update Elements, as you can update a large number of properties in one change. (And you avoid setting inline styles!)

While we can technically update a class with **setAttribute**, it involves overwriting all existing classes. If we simply want to add an extra class, we'd have to do the following:

```
const li = document.querySelector('li');
let classes = li.getAttribute('class');
li.setAttribute('class', classes + " newClass");
```

#### className

The above can be approved upon by using **className**.

```
const li = document.querySelector('li');
li.className += " newClass"
```

<sub>Note: The leading space is important, as all classes are separated with spaces!!</sub>

Unfortunately, this method falls short when you're trying to remove classes. (You have to get the className string, check if it contains your class, and then do string manipulation to remove it.)

#### classList

**classList** will return an array-like object with useful helper functions added!

```
const li = document.querySelector('li');
li.classList // ['todo', 'completed', value: 'todo completed']

// Add class
li.classList.add('class')

// Remove Class
li.classList.remove('class')

// Toggle Class
li.classList.toggle('class')
```

**classList.toggle** is especially powerful as you don't need to check whether or not it's active. If the class isn't present, it adds it. If it is, it removes it!

There are also other useful helper functions such as **contains**, **forEach**, and **replace**.

## Create Elements

We can use **createElement** to create HTML Elements!

```
const newDiv = document.createElement('div');
newDiv.innerText = "A brand new div!"
newDiv.style.color = "tomato"
```

<sub>Note: **createElement** will create an empty Element, so you still need to add content/styling.</sub>

### Adding Elements

Creating an Element isn't enough. You also have to add it to the page!

#### append

**append** will add an element after the last child.

```
const ul = document.querySelector('ul');
ul.append(HTMLElement);
```

**append()** also accepts multiple elements at once!

```
document.body.append(firstElement, ... nthElement);
```

As shown above, we also have direct access to the **body**, so it's quick to append Elements to the end of the body!

There is also the **appendChild** method, but it is older and doesn't support appending multiple elements. (**append** wasn't compatible with IE, but since that's gone... it's best to stick with simply **append**).

#### prepend

**prepend** adds an Element as the first child.

```
const ul = document.querySelector('ul');
ul.prepend(HTMLElement);
```

### Removing Elements

Much like creating elements, we have a handy **remove** method.

```
const removeMe = document.querySelector('#remove-me');
removeMe.remove();
```

There is also the older **removeChild**, but it requires selecting the parent and then passing in the child. With IE gone, it's safe to stick with **remove**.

# JavaScript Events

DOM events are "actions" that occur as a result of actions by the user or browser. Some common events:

- Clicking
- Hovering
- Pressing a specific key
- When the DOM has loaded

<sub>Full list at [MDN](https://developer.mozilla.org/en-US/docs/Web/Events)</sub>

Events are the lifeblood of broswer based JS! We listen for events, and then react. This approach is known as **Event Driven Programming**.

## Adding Events

The general structure for adding events is:

> When \<event-type> occurs on \<HTMLElement(s)>, do \<action>

There are 3 ways of adding Events:

#### Adding via HTML

```
// HTML file
<h1 onclick="functionName()">Hello World</h1>

// JS file
function funtionName() {
  console.log("You just clicked the h1 element!");
}
```

This method is not ideal, as it violates **Separation of Concerns** by adding JS logic to our HTML.

#### Adding via JS

```
const btn = document.querySelector('button');
btn.onclick = functionName;
```

<sub>**Important:** Don't pass the '()' with the function as it will result in it being executed immediately! Only pass the reference.</sub>

If you need to pass arguments to the function, then an annymous function will assist.

```
btn.onclick = function() {
  functionName(arg);
}
```

While this is an improvement over adding in HTML, we still have a better solution.

#### Adding via eventListener

```
const h1 = document.querySelector('h1');
h1.addEventListener('type', function() {
  console.log("You just clicked the h1 element!");
})
```

This is our preferred method for two reasons:

- If we ever want to remove our event, its far easier to do with eventListeners.
- If for some reason you needed multiple onEvents of the same type, you can only do that with eventListeners.

## Event Object

Every event comes with it's own object containing vital information about the event. Some important Event attributes:

- target: Indicates the element that was clicked.
- page x/y: Indicates the position of the event.
- type: Indicates the type of event.
- preventDefaut() - Used to prevent default event behaviour, such as a form submission refreshing the page.

You can access it via:

```
btn.addEventListener('click', function(e) {
  // do something with e
})
```

## Event Examples

#### onclick

```
btn.addEventListener('click', function() {
  // submit form
})
```

#### DOMContentLoaded

Browsers parse HTML from top to bottom, and will run any \<script></script>s the moment they are encountered! That means if your \<script></script> is in the \<head></head> and references anything in the \<body></body> all of the HTMLElements will be **null**!

One solution is to put /<script></script> tags at the end of the body, but you can also do the following:

```
document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM parsed and loaded!');
})
```

It's worth noting that this isn't when everything in the page, such as images, are fully loaded. It's simply when the entire HTML file has been parsed and loaded. (You still have access to the elements, but the may not be rendered on screen yet.)

#### window.load

This can be used to wait for all content, such as images, to be fully loaded.

```
window.addEventListener('load', function() {
  console.log("Fully Loaded!");
})
```

#### onsubmit

```
const form = document.querySelector('form');
form.addEventListener('submit', function() {
  console.log('Form Submitted!');
})
```

By default, submit will refresh your page (or if \<action></action> is supplied, it'll send you to that page.) While, this can be useful, in the above example, you'll immediately lose your console.log() due to a page refresh! Thankfully, it's easy to disable this behaviour:

```
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  // do stuff on this page
})
```

### Key Events

#### keypress

```
input.addEventListener('keypress', function(e) {
  console.log(`You pressed the ${e.key} key!`)
})
```

<sub>Note: keypress only tracks a full key sequence, aka when something would show up in an input. This means that keys like shift, alt, and caps lock don't trigger by themselves.</sub>

Keypress is useful for inputs, but if you were making a game you'd want to track all keys, as something like shift could be mapped to a boost, etc. In those scenarios, you'd use the following two events.

#### keydown

Keydown tracks when any key is pressed down.

```
document.addEventListener('keydown', function() {
  console.log('Keydown detected!');
})
```

#### keyup

Keyup tracks when any key is released.

```
document.addEventListener('keydown', function() {
  console.log('Keydown detected!');
})
```

## Handling Multiple Events

A common use case for having multiple events could be having a list where each item has it's own Event.

```
// HTML
<ul id="friend-list">
  <li>Friend 1 <button>Unfriend</button></li>
  <li>Friend 2 <button>Unfriend</button></li>
  <li>Friend 3 <button>Unfriend</button></li>
</ul>

// JS
const removeBtns = document.querySelector('li button');
for (let btn of removeBtns) {
  btn.addEventListener('click', function(e) {
    e.target.parentElement.remove():
  })
}
```

While this gets the job done, it's not ideal. Each \<li></li> performs the exact same event, albeit on itself, and we make a new eventListener for each one. Imagine if we had 100 or even 1000 friends! It also doesn't account for the fact that new friends could be added to the list. We'd have to manually add a new eventListener every time we add a new friend!

### Event Delegation

With **Event Delegation** we attach a listener to the parent, in our case the \<ul></ul> and then pass the Event down to the child. This results in 1 eventListener total vs an eventListener for each \<li></li>.

```
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
```

# Data Attributes

We can create custom **data attributes** to add metadata or additional information to Elements. This is info that the user shouldn't see but is still accessible in CSS & JS.

### Creating Data Attributes

Simply add an attribute to your HTML that begins with "data-" plus whatever you want to name the attribute.

```
<ul id="cars">
  <li data-model="model 3" data-year="2014">Tesla</li>
  ...
</ul>
```

### Accessing Data Attributes

If you're accessing a single **data attribute**, it's easy enough to use **getAttribute** and **setAttribute**.

```
li.getAttribute('data-year');
li.setAttribute('data-year', value);
```

If you want to access all of your **data attributes**, you can use the **dataset** property, which returns a DOMStringMap.

```
// Read
li.dataset // {model: 'model 3', year: '2014'}
li.dataset.year // '2014'

// Write
li.dataset.year = '2020';
li.dataset.sold = true; // This would add a new data attribute, sold, with the value of true
```

<sub>Note that when using **dataset** the "data-" prefix is removed!</sub>

# localStorage & sessionStorage

**localStorage** and **sessionStorage** are mechanisms for storing info in the browser for a specific domain. The main difference between the two is that **localStorage** has no expiry, while **sessionStorage** is cleared when the browsing session ends. (The window or tab is closed.)

Other than that difference, they function identically and use all the same methods, etc.

**localStorage** stores it's info in the browser application. That means if you go to a different computer or use a different browser, you won't have access to that data. This is also true for incognito/private mode.

## Accessing localStorage

All data is stored in a key-value pair, and every key has to be a String. Values are also stored as Strings, regardless of the type provided.

```
// Read
localStorage.getItem('key'); // value

// Write
localStorage.setItem('key', value);

// Remove
localStorage.removeItem('key');

// Clear (empty everything)
localStorage.clear();
```

In the case of **getItem** and **setItem**, we can also use .notation!

```
// Read
localStorage.key // value

// Write
localStorage.key = value
```

### Handling Primitives

Since all values are stored as Strings, you need to convert back to the proper data type. This is simple enough when it comes to primitives, as shown below:

```
// Number
const count = parseInt(localStorage.getItem('count'));

// Float
const count = parseFloat(localStorage.getItem('count'));
```

### Handling Objects

If you try and insert an Object into local storage you'll get the following:

```
localStorage.setItem('key', myObj); // key: "[object Object]"
```

To work around this, we can use JSON!

```
const preferences = {fontSize: "18px", color: "purple",}

localStorage.setItem('preferences', JSON.stringify(preferences));
JSON.parse(localStorage.getItem('preferences'));
```
