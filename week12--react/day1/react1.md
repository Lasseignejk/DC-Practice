# React

Used by lots of big-name sites

Used to use Create React App (CRA). But it was always slow, so now we use Vite

# Vite

[](https://vitejs.dev/guide/)

    npm create vite@latest

    y

    first-react-app

Select React, then select JS or TS

    Done. Now run:
        cd first-react-app
        npm install
        npm run dev

Now your react project is hosted on whatever port it says

Everything you write in react needs to be inside the src folder. if it is outside, react won't be able to access it

## src folder

assets folder is for files that are not code. pictures, icons, etc.

### main.jsx

this is the point of inception of your react app. this file is the start of all your react apps.

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )

^ This line is how you know it is the starting point.

Walmart uses React. Remember, React reloads only areas of a website that gets updated. Updates only the things that are updated on the DOM. It reacts to the changes you make

React has re-usable components. Kinda like partials in EJS. Another strength of react. you can re-use those over and over and over again, as long as you make them **generic.** Don't hard code! It should only take in data and render it. Don't hard code your data.

In react, you build components on components on components on components. Make everything a small component.

So on the main.jsx file, the <app> is what renders everything on the page.

## index.css

react comes with css pre-written. you can of course delete it all

## App.jsx

all componnets should have the first letter capitalized on the file name and the function names should be capitalized. Pascal casing

## adding css

To add css to a react page, write at the top of the jsx file:

    import './App.css'

## Changes

React is always watching. If you make a change, it'll automatically reload the page with the changes

All of your errors will be in the console in your BROWSER.

## Download React Developer Tools for your browser

This will help us debug our code. Right click inspect, there're now 2 new sections with the react symbol. if you click on it it'll show the react code.

# to make an app from scratch

delete the css files

delete line 2 on the app.jsx file, as well as lines 10-29

    import { useState } from "react";

    import "./App.css";

    function App() {
        return <div className="App"></div>;
    }

    export default App;

All components should be written in ES6 format (fat arrow)

### Download ES7 + React/Redux..... for snippets

shortcuts for react

## JSX

something that looks like html but is actually JS. compiled behind the scenes by a compiler called 'Babel.' Turns the jsx into readable code for your browser

interview question: what compiles your jsx? BABEL

For something to be a component, it needs to return jsx. otherwise it is just a function.

Every React component can only return ONE element. that element can have many things inside, but it can only return ONE.

    function App() {
        return (
        <p>wow</p>
            <div className="App">
                <h1>Hi there</h1>
            </div>
        );
    }

^ This throws an error.

    Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (8:2)

The p tage is outside the div, so it is trying to return TWO things. put the p tag in the div and the error will go away.

    function App() {
        return (
            <div className="App">
                <p>wow</p>
                <h1>Hi there</h1>
            </div>
        );
    }

All HTML elements come with the border margin padding. If you don't want all that, use a fragment. Wrap that div above in <> </>. Sometimes adding a div will mess up the spacing and whatnot, so we can use a fragment instead.

    function App() {
        return (
            <>
                <div className="App">
                    <p>wow</p>
                    <h1>Hi there</h1>
                </div>
            </>
        );
    }

## Making your own components

make a folder in src called ocmponents. inside that folder, make more folders for each section. like account, ddashboard, header, footer

inside header.jsx, type rf and it should complete to react component

    export default class Header extends Component {
        render() {
            return (<div>Header</div>);
        }
    }

rfc and rafc

[snippets](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

[rfc not working](https://github.com/ults-io/vscode-react-javascript-snippets/issues/279)

    You can search through snippets with ES7 snippet search command which can be run with CMD + Shift + P or just use CMD + Shift + R (CTRL + ALT + R for Windows & Linux) keybinding.

To use that component, go back to your app.jsx and invoke the funciton, invoke the ocmponent. If you type a < then start typing the name of the component, you should see it pop up.

    function App() {
        return (
            <div className="App">

                <h1>App.js</h1>
        <Header />
            </div>
        );
    }

But it doesn't know where 'header' is. You have to import it at the top of your page too.

    import { useState } from "react";

    import "./App.css";
    import { Header } from "./components/header/Header";

    function App() {
        return (
            <div className="App">

                <h1>App.js</h1>
        <Header />
            </div>
        );
    }

    export default App;

Put the css in the folder with the component.

Put a class name on something using className instead of just class

Then import that css at the top

    import "./Header.css";

    export const Header = () => {
        return (
            <div className="headerBody">
                <h2>Header</h2>
                <p>This is a header component</p>
            </div>
        );
    };

Again, App calls all of the components. It is the PARENT component

## Passing Props

Props and States are super important things in react

Often, you have data that comes in to you. For example, studentName.

    function App() {
        const studentName = "Jaye";
        return (
            <div className="App">
                <h1>App.js</h1>
                <Header />
                <Footer />
            </div>
        );
    }

I want to use that studentName in my footer. How can I get that data to my footer? Use props.

We can add that data as an attribute to our footer.

The name on the left side of the equals sign needs to be the exact same as whatever your data is called. This is purely to keep it clear to you what that data is. In our case, studentName. It can technically be called whatever you want, but that gets really confusing really fast.

    function App() {
        const studentName = "Jaye";
        return (
            <div className="App">
                <h1>App.js</h1>
                <Header />
                <Footer studentName={studentName} />
            </div>
        );
    }

So the data studentName is being tied to Footer

If you right click inspect, go to components, look at footer, there should now be a section called props and you should be able to see the data you entered.

Go to Footer.jsx, pass the word props as a parameter, then console.log props

    import "./Footer.css";

    export const Footer = (props) => {
        console.log(props);
        return (
            <div className="footerBody">
                <h2>Footer</h2>
                <p>This is a footer component</p>
            </div>
        );
    };

studentName is AN OBJECT. if you change the console.log to

    console.log(props.studentName)

You'll get just the name of the student

Props are read only. You cannot modify them.

To get that data to render out on the screen,

    import "./Footer.css";

    export const Footer = (props) => {
        console.log(props.studentName);
        return (
            <div className="footerBody">
                <h2>Footer</h2>
                <p>{props.studentName}</p>
            </div>
        );
    };

If you're comfortable with destructuring, you can rewrite that code like this

    import "./Footer.css";

    export const Footer = ({studentName}) => {
        console.log(studentName);
        return (
            <div className="footerBody">
                <h2>Footer</h2>
                <p>{studentName}</p>
            </div>
        );
    };

![Path of Data](/week12/day1/first-react-app/src/assets/pathOfData.png)

## State

State is a place where you store data.

If an element is tied to state and then that element is updated, then that element ALONE is re-rendered, not the whole page.

In order to see those changes, we need to use a hook.

The first hook we'll learn is useState

Import it at the top of your app.jsx file

    import { useState } from "react";

make a new variable, after it make a function. The function is usually 'set' + the name of the variable. That variable will be equal to useState() and you'll pass useState the starting value.

    function App() {
        const [counter, setCounter] = useState(0);
        const studentName = "Jaye";
        const student2 = "Hunter";
        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <Header student2={student2} />
                <Footer studentName={studentName} />
            </div>
        );
    }

Add two buttons, one + one -

Add event listeners to have them increase/decrease the counter

    function App() {
        const [counter, setCounter] = useState(0);
        const studentName = "Jaye";
        const student2 = "Hunter";
        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <Header student2={student2} />
                <Footer studentName={studentName} />
            </div>
        );
    }

Now if we hit the buttons up and down, just the counter is changing. the whole page isn't reloading, it's just that number.

This is SO MUCH FASTER than re-rendering the whole page.

State causes the page to re-render if there is a change.

You can also use your state variable as a prop.

    function App() {
        const [counter, setCounter] = useState(0);

        const studentName = "Jaye";
        const student2 = "Hunter";

        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <Header student2={student2} counter={counter} />
                <Footer studentName={studentName} />
            </div>
        );
    }

In Header.jsx:

import "./Header.css";

    export const Header = (props) => {
        return (
            <div className="headerBody">
                <h2>Header</h2>
                <p>This is a header component</p>
                <p>{props.student2}</p>
                this is Apps counter {props.counter}
            </div>
        );
    };

This will cause the header to update in sync with the main counter on app.

![In sync](/week12/day1/first-react-app/src/assets/counterProp.png)

## What if you have an array or object?

    function App() {
        const [counter, setCounter] = useState(0);
        const studentData = { name: "Tyler", occupation: "ui/ux designer" };
        const studentName = "Jaye";
        const student2 = "Hunter";

        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <p>{studentData}</p>
                <Header student2={student2} counter={counter} />
                <Footer studentName={studentName} />
            </div>
        );
    }

Throws an error

    Objects are not valid as a React child (found: object with keys {name, occupation}). If you meant to render a collection of children, use an array instead.

Objects cannot be used in react. instead, use dot notation to render specific values from that object.

    function App() {
        const [counter, setCounter] = useState(0);
        const studentData = { name: "Tyler", occupation: "ui/ux designer" };
        const studentName = "Jaye";
        const student2 = "Hunter";

        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <p>{studentData.name}</p>
                <Header student2={student2} counter={counter} />
                <Footer studentName={studentName} />
            </div>
        );
    }

If you want to render everything you have to use map

    function App() {
        const [counter, setCounter] = useState(0);
        const studentData = { name: "Tyler", occupation: "ui/ux designer" };
        const studentName = "Jaye";
        const student2 = "Hunter";

        return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                {studentData.map((student) => (
                    <p>{student.name}</p>
                    <p>{student.occupation}</p>
                ))}
                <Header student2={student2} counter={counter} />
                <Footer studentName={studentName} />
            </div>
        );
    }

Throws an error. We have to wrap this in a div. But now that we look at it, can't we just make that a component?

Make a Student folder with a Student.jsx file inside. In that file:

    import React from "react";

    const Student = ({ student }) => {
        return (
            <div>
                <p>{student.name}</p>
                <p>{student.occupation}</p>
            </div>
        );
    };

    export default Student;

And now the return statement on App.jsx should look like this

    	return (
            <div className="App">
                <h1>App.js</h1>
                <h3>Counter is: {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                {studentData.map((student) => (
                    <Student student={student} />
                ))}
                <Header student2={student2} counter={counter} />
                <Footer studentName={studentName} counter={counter} />
            </div>
        );
