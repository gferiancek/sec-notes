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

## Document

The **document** object represents the web page that has been loaded. It is our "starting point" for access into the DOM.

The **document** object allows us to:

- Find elements
- Make new elements
- Update elements
- Change properties on elements
- Listening for events, such as clicks

You can view the document object for any page by opening the console and typing:

```
console.dir(document)
```

<sub>Note: This command unfortunately shows us HTML instead of a JS Object. It's a mix of the HTML shown and the rough JS diagram from above.</sub>

### Selecting Elements

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

### Searching within an Element

While all of the above examples used document, we can use our selectors on any HTML Element.

```
let form = document.querySelector('form');

let buttons = form.querySelectorAll('button');
```
