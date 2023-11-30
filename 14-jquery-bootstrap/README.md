# jQuery

jQuery is a library that makes it easier to do things such as:

- Manipulating the DOM
- Adding Event Listeners
- Animating Elements
- Matting HTTP Requests (AJAX)

Some reasons for using jQuery:

- Brevity and Clarity
- Cross-Browser Support
- Makes AJAX easy.
- It's widely used across many websites. You may not start a new project with it, but you'll likely encounter code that uses it in existing sites.

## jQuery Setup

Head over to [](https://code.jquery.com) and grab the latest version.

Thankfully, it's a CDN so it's just a quick script tag away! (Just make sure to put it **before** your other js scripts.)

## Selecting Elements

`$` is a common sight in jQuery. It preceeds most calls, and is shorthand for the `jQuery()` function.

```
$('ul') // selects all uls

$('#id') // selects specific id
```

It's important to note that `$` returns **jQuery Objects** and not `HTMLElements / NodeLists`.

### Naming Conventions

Since jQuery methods return special jQuery objects, it's common to start variables that contain them with `$` such as:

```
const $h1 = $('h1');
```

This way, a developer will know that its a jQuery object, and not the usual HTMLElement/NodeList.

### get

`get()` allows you to turn your jQuery object into the DOM equivalent. (Element/list/etc.)

```
$('h1').get() // get all h1s

$('h1').get(0) // get first h1
```

This can come in handy at points, but most of jQuery is set up to work on jQuery objects!

## Operating on jQuery Objects

While vanilla JS has separate `get` and `set` methods, jQuery typically has one single method, with an optional argument for doing `set`s.

It's also worth noting that most jQuery methods return jQuery objects, meaning you can chain commands. (Get an element, update its text, set a style, etc all in one chain.)

```
$('h1')
    .addClass(// add new class)
    .text(// set text)
    .html(// add innerHTML);
```

### text

gets combined text of all matches // updates html of all matches.

```
$('h1').text() // gets text
$('h1').text('Volcano') // sets text
```

### html

gets the innerHtml of the first match // updates innerHtml of all matches.

```
$('li').html() // gets first li innerHTML
$('li').html('<b>BOLD</b>) // updates all li.innerHTML
```

### attr

gets an attr for first match // sets attr for all matches.

```
$('a').attr('href') // gets href attribute
$('a').attr('href', 'https://www.google.com') // sets all <a> href's to be google.com
```

attr can also be used to update multiple attrs in one call, by supplying an object with the corresponding `key: value` pairs.

```
const newAttrs = { src: 'https://www.google.com/cat-image', alt: 'A cute cat' };

$('img').attr(newAttrs) // updates src/alt for all <img>
```

### val

gets the value for the first match // sets value for all matches

```
$('input').val() // gets value
$('input').val('') // empties all inputs;
```

### eq

Used to select a specific element from within a jQuery Object.

```
$('li').eq(2).text() // gets 3rd li text
```

eq is handy if you're wanting to grab a specific item from a group. (In most cases you'd probably have a class/id/etc and can just use your desired selector.)

### css

`.css()` is used to grab **computed** styles of an element.

```
$('a').css('color') // gets color of first <a>
$('a').css('font-size', '30px') // sets all <a> font-size
```

Like `attr()` you can also pass in an object to update multiple css attributes in one call.

### Handling Classes

`addClass()` - adds class to existing classList.
`removeClass()` - removes specified class, or **all** classes if called with 0 arguments.
`toggleClass()` - toggles class on/off.

You can skip accessing the `classList` and just call the desired function to update a class on all selected elements inside your jQuery object!

## Traversal Methods

The following methods relate to traversing the DOM. Much like the earlier methods, they can be applied to multiple elements at once.

Note: This isn't an exaustive list. Check the docs if you need more!

### next / previous

Finds the next sibling

```
$('li').eq(3).next()
// Returns the 5th li, if it exists

$('li').eq(1).prev()
// Returns the 1st li.

$('li').next()
// Returns all <li> except the first one.

```

### parent

Returns the parent element.

```
$('a').parent()
```

As breifly mentioned above, this will work for all matches. That means you'll get a jQuery object that possibly contains more than one element. (If all /<a></a> tags contain the same parent, you'll only get that element. But if some have a different parent you'll get both!)

### children

Finds direct children. You can pass in a query to look for specific elements.

```
<ul>
    <li><a href="..."></a></li>
    <li><a href="..."></a></li>
    <li><a href="..."></a></li>
</ul>

$('ul').children()
// Returns <li>s

$('ul').children('a')
// Returns nothing, as <a>'s are not DIRECT children of <ul>.
```

### find

Looks through children, and can search multiple levels deep to find a match.

```
$('ul').find('a')
// Returns the <a>'s that are inside the <li>'s
```

## Operating on Elements

### append / prepend

Conveniently, we can append an element without creating one beforehand! We can just pass in a string of HTML, even adding classes, attributes, etc.

```
$('ul').append('<li class="highlight">I AM NEW</li>)
```

As expected, this works the same with prepending:

```
$('li').prepend('<input type="checkbox" />');
```

### Creating Elements

While using an HTML string is convenient for simple elements, the `$()` function can also create elements if you provide a tag instead of a selector.

```
$('<h1>')
    .css('color', 'orange')
    .text("I'm an H1!")
    .addClass('title')
// Creates new h1 with style/text/class
```

#### appendTo / prependTo

These are called on an Element that you're creating to append/prepend it to another element.

```
$('<li>')
    .text('New LI')
    .appendTo('ul');
```

Alternatively, you could save your new element to a variable and then do `Element.append(newElement)`.

#### before / after

Used to add an element as a sibling of another element, either **before** or **after** it.

```
const $li = $('<li>')
    .text('New LI')

$('li').after($li)
// This would add a new LI after each existing LI.
```

#### remove

Removes all selected elements.

```
$('li').remove();
// removes ALL <li>'s
```

## Events

### click

Handles Click events.

```
$('img').click(function() {
    alert('HELLO!');
});
```

While this is simple, most people prefer to use `.on()`

### on

One major advantage of `on()` is event delegation, which we'll discuss shortly. As for using `on()`

```
$('img').on('click', function() {
    console.log('Clicking an image!');
});
```

### Convering to jQuery Object

Inside of your event listener, you're in the scope of the element, so `this` refers to the element itself. Thankfully it's easy to turn it into a jQuery object:

```
$('img').on('click', function () {
    $(this) // jQuery object
})
```

### Event Delegation

`on()` has a handy shortcut for event delagation by using an optional 2nd String argument:

```
$('.container').on('click', '.child', function () {
    $('this').doSomething();
})
```

As a bonus, jQuery is smart enough to know that `this` should refer to the child and not the container!

## Effects (Animations)

jQuery has some handy animation methods for quick animations. (Though, now that CSS has keyframes and such, that's the better place to do your animations in most cases.)

### fadeOut

`fadeOut()` is a handy shortcut for fading out an element.

```
$('img').on('click', function () {
    $('this').fadeOut();
})
```

Its worth noting that this doesn't actually remove the element, and only sets `display: none`. `fadeOut()` can take a callback to execute after the animation though.

```
$('img').on('click', function () {
    $('this').fadeOut(300, function () {
        $('this').remove() // removes AFTER fadeOut completes.
    })
})
```

### fadeIn

Pretty self explanatory, it fades an element in!

### animate

`animate` allows you to pass in an object of properties, much like `attr` or `css`.

```
$('img').on('click', function () {
    $('this').animate({
        opacity: 0,
        width: 50px, // DON'T ANIMATE WIDTH POOR PERFORMANCE
    }, 300, function() {
        $('this').remove();
    })
})
```
