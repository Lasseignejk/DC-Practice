# React Sneak Peak

React is still the most popular JavaScript framework

You just have to know where to place it

Front-end framework, one of the more popular ones

Originally came from... Facebook?

They update the language but don't always update the framework...

Google is Angular

View is X Google

Ones you want to stick with are ones that are industry tested and regularly used.

## Benefits of React

So way back when, we did DOM Manipulation and APIs. Then we did backend.

But all this feels a little clunky. Frontends have been kinda dumb.

So now, React makes the frontend a little smarter

Functionality of JS + simplicity of HTML = JSX

React doesn't make HTML. React makes JSX.

## Vite (VEET)

[Vite Website](https://vitejs.dev/blog/announcing-vite2.html)

> Vite (French word for "fast", pronounced /vit/) is a new kind of build tool for frontend web development. Think a pre-configured dev server + bundler combo, but leaner and faster. It leverages browser's native ES modules support and tools written in compile-to-native languages like esbuild to deliver a snappy and modern development experience.

> To get a sense of how fast Vite is, check out this video comparison of booting up a React application on Repl.it using Vite vs. create-react-app (CRA).

The install for Vite is much faster than the older 'create-react-app'

## React

When you manipulate the DOM and add an element it causes the whole page to be re-rendered. With react, it keeps the rest of the page static but re-renders the parts that changed

## App.jsx

It looks just like HTML, but a little different.

It's called JSX. DO NOT SAY YOU ARE WRITING HTML. YOU ARE WRITING JSX

React has components. Like partials in ejs

Components are just functions. They are functions that return JSX. they are functions that return the stuff that looks like html.

## A new .jsx file

    rfc

! for jsx files

Make a function, return it, then on the main page, import and invoke it.

## State and Props

How react renders information on a page, dynamic information, like ejs

state is like a box where you put stuff that you want to use later.

You use 'state' in something called a 'hook'.

    const [] = useState()

    const[counter, setCounter] = useState(0);

Hook has three parts

1. counter is the name of the variable

2. setCounter is the function

3. useState is the default value of the state at the start

"Make a counter using react" -- common interview question

changing state causes a react componenet to rerender

if you change state too much, you cause an infinite amount of rerenders.

So that hook is like doing this:

    let counter = 0
    const setCounter = (value) => {
        counter = value;
    }

Standard: if our variable name is 'counter,' then the set name will be 'setCounter.' if the variable is called 'username,' then the set name will be 'setUsername.'

### Props

how we pass data dynamically
