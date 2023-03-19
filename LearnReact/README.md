#               Learn React
> From react.dev/learn

## How to create and nest components
React apps are made out of **components**. A component is a piece of the UI that has its own logic and appearance. A component can be as small as a button, or as large as an entire page. 
> React components are *JavaScript* functions that return markup:
```JavaScript
function MyButton(){
    return (
        <button>I'm a button</button>
    );
}
```
Now that you've declared `MyButton`, you can nest it into another component: 
```JavaScript
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}
```
React components names must always start with a capital letter, while HTML tags must be lowercase. 
## Writing markup with JS
The markup syntax you've seen above is called *JSX*. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box. 
JSX is stricter than HTML. You have to close tags like <br />. Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
```JavaScript
function AboutPage(){
    return (
        <>
            <h1>About</h1>
            <p>Hello there. <br />How do you do?</p>
        </>
    );
}
``` 
## Adding styles
In React, you specify a CSS class with className. It works the same way as the HTML class attribute. 
```JavaScript
<img className="avatar" />
```
Then you write the CSS rules for it in a separate CSS file:
```CSS
/* In your CSS*/
.avatar{
    border-radius: 50%;
}
```
React does not prescribe how you add CSS files. In the simplest case, you'll add a `<link>` tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project. 

## Displaying data
JSX lets you put markup into JAvaScript. Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it ti the user. For example, this will display `user.name`:
```JavaScript
return (
    <h1>
        {user.name}
    </h1>
);
``` 
You can also "escape into JavaScript" from JSX attributes, but you have to use curly braces instead of quotes. For example, `className="avatar"`passes the "avatar" string as the CSS class, but `src={user.imageUrl}` reads the JavaScript `user.imageUrl` variable value, and then passes that value as the `src` attribute. 
```JavaScript
return (
    <img
        className="avatar"
        src={user.imageUrl}
        />
);
```
You can put more complex expressions inside the JSX curly braces too, for example, `string concatenation`

## Rendering Lists
You will rely on JavaScript features like `for` loop and the array `map()` function to render lists of components. 
For example, let's say you have an array of products. 
```JavaScript
const products = [
    {title: 'Cabbage' , id: 1},
    {title: 'Garlic' , id: 2},
    {title: 'Apple' , id: 3},
];
```
inside you component, user the `map()` function to transform an array of products into an array of `<li>` items: 
```JAvaScript
const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul> {listItems}</ul>
);
```

## Responding to events
You can respond to events by declaring *event handler* functions inside your components: 
```JavaScript
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me 
        </button>
    )
};
```
Notice how `onClick={handleClick}` has no parenthesis at the end! Do not call the event handler function: You only need to pass it down. React will call your event when the user clicks the button. 

## Updating the screen 
Often, you'll want your component to "remember" some information and display it. Fow example, maybe you want to cont the number of times a button is clicked. To do this, add *state* to your component. 
First import `useState` from React. 
```JavaScript
import { useState } from 'react';
```
Now, you can declare a state variable inside your component. 
```JAvaScript
function MyButton() {
    const [count, setCount] = useState(0);
```
You'll get two things from `useState`: The current state(`count`), and the function that lets you update it (`setCount`). You can give them any names, but the convention is to write [`something, setSomething`]. 

The first time the button is displayed, `count` will be a `0` because you passed that to `useState()`. When you want to change state, call `setCount()` and pass the new value to it. Clicking this button will increment the counter. 

```JAvaScript
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```


# Referencing Values with Refs

When you want a component to "remember" some information, but you don't want that information to trigger new renders, you can use a *ref*.
## Adding a ref to your component 
You can add a ref to your component by importing the `useRef` Hook from React: 
```JavaScript
import { useRef } from 'react';
```
Inside your component, call the `useRef` Hook and pass the initial value that you want to reference as the only argument. For example, here is a red to the value: 0:
```JavaScript
const ref = useRef(0);
```
`useRef` returns an object like this: 
```JavaScript
{
    current: 0 // The value you passed to useRef
}
```
You can access the current value of that ref through the `ref.current` property. This value is internationally mutable, meaning you can both read and write to it. It's like a secret pocket of your component that React doesn't track. (This is what makes it an "escape hatch" from React's one-way flow-more on that blow).
```JavaScript
import { useRef } from 'react';
(
export default function Counter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}
```
The ref points to a number, but like state, you could point to anything: a string, an object , or even a function. Unlike state, ref is a plain JavaScript object with the `current` property that you can read and modify.

Note that the component doesn't re-render with every increment. Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a red does not! 

When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn't require a re-render, using a ref be more efficient. 
### Differences between refs and state
Perhaps you're thinking refs seem less "strict" than state-you can mutate them instead of always having to use a state setting function. But, in most cases, you'll want to use state. Refs are an "escape hatch" you won't need often. 

## Manipulating the DOM with Refs 

React automatically updates the DOM to match your render output, so your components won't  often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React. For example, to focus a node, scroll to it, or measure its size and position. There is no built-in way to do those things in React, so you will need a *ref* to the DOM node. 

### Getting a ref to the node
To access a DOM node managed by React, first, import the `useRef` Hook:
```JavaScript
import { useRef } from 'react';
```
Then, use it ti declare a ref inside your component: 
```JavaScript
const myRef = useRef(null);
```

Finally, pass it to the DOM node as the `ref` attribute
```JavaScript
<div ref={myRef}>
```
The `useRef` Hook returns an object with a single property called `current`. Initially, `myRef.current` will be `null`. When React creates a DOM node for this `<div>`, React will put a reference to this node into `myRef.current`. You can then access this DOM node from your event handlers and use the built-in browser API's defined on it. 
```JavaScript
// You can use any browser API's, for example:
myRef.current.scrollIntoView();
```


# Synchronizing with Effects 

Some components need  to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. *Effects* let you run some code after rendering so that you can synchronize your component with some system outside of React. 

## What are Effects and how are they different from events? 

- Rendering code lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen. Rendering code must be pure. like a math formula, ot should only calculate the result, but not do anything else. 
- Event handlers are nested functions inside your components and *do* things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event handlers contain "side effects" caused by specific user action. 

**Effects let you specify side effects that are caused by rendering itself, rather than by a particular event**

1. Step 1: Declare an Effect 
To declare an Effect in your component, import the `userEffect` Hook from React:

```JavaScript
import { useEffect } from 'react';
```
Then call it at the top level of your component and put some code inside your effect: 
```JAvaScript
function MyComponent() {
    useEffect(() => {
        // Code here will run after every render/
    });
}
```
Every time your component renders, React will update the screen and then run the code inside `useEffect`. In other words, `useEffect` "delays" a piece of code from running until that render is reflected on the screen. 