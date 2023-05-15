# React Router

[Documentation](https://reactrouter.com/en/main)

## Install React Router

    npm install react-router-dom

Delete the pictures from src and public

On the index.html change the title of the document and remove the logo from the head

Today, we're going to create a SPA (Single Page Application)

Make a folder for components inside src

Inside that folder, make folders for Navbar, Account, Homepage, then put a .jsx file in each with the same name as the folder

## Default Export vs not default export

    function Account() {
        return <h1>Account</h1>;
    }

    export default Account;

Sometimes our functions look like this and sometimes they have

    export function Account() {
        return blah blah blah
    }

So what's the difference? Do we need both of those exports, one in front of the function and one at the end? do we only need one?

If you use export in front of the function, when you import it on your app.jsx, you need to put it in {}

    import { function } from "./blah"

If you remove those curly braces, save, refresh, the code breaks. "The requested module does not provide an export named default."

So when you don't have curly braces, you are saying that that file exports that thing by default.

You can put helper components in a separate file. Then, when you want to use a specific function from that file, you can just import that one thing.

    import { Red } from "./blah"

If you want to share a component in multiple places, put export in front of the function then import it in curly braces where you need it. If a page has only one function, export default at the bottom.

Pages should only have ONE default export. If the page is going to have multiple components on it, just put an export in front of each one. Don't have a default.

## Set up React Router

Whenever you need to give something to your entire application, go to main.jsx

On main.jsx:

    import { BrowserRouter } from "react-router-dom"

Then wrap <App /> with <BrowserRouter>

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );

Now we can use routes. Close out of main.jsx.

Go back to App.jsx, import:

    import { Route, Routes } from "react-router-dom";

Delete the div and add <Routes>

    function App() {
        return (
            <Routes>
                <Account />
                <Homepage />
                <Navbar />
            </Routes>
        );

    }

THen inside routes, make a singular route, add a path and an element which is the component.

    function App() {
        return (
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
        );
    }

Now, if you go up to the url and type /homepage, you should see your homepage render. But that's dumb. Let's change it. Let's make navbar.jsx act like a navbar.

In Navbar.jsx, import:

    import { Link } from "react-router-dom";

This lets us use link tages! Throw some in the return:

    function Navbar() {
        return (
            <div>
                <Link to="/homepage">Home</Link>
                <Link to="/account">Account</Link>
            </div>
        );
    }

Then, on App.jsx, remove the navbar route, invoke navbar above Routes, then wrap everything in a fragment.

    function App() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </>
        );
    }

You should see your navbar render on the screen! If you want your navbar to look a LITTLE BIT nicer:

    import { Link } from "react-router-dom";

    function Navbar() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/homepage">Home</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    export default Navbar;

So now we have a navbar. But what if someone goes up to the url and types in gibberish? It just renders "home." Instead, let's make a new component for error page.

    import React from "react";

    const ErrorPage = () => {
        return <div>THIS PAGE DOES NOT EXIST</div>;
    };

    export default ErrorPage;

Then on App.jsx, add a new route beneath the others

    function App() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </>
        );
    }

The \* path means it'll render if it doesn't match any of the above routes.

## Nested Routes

For example, /account/settings

Inside the Account foler, make a new file called AccountSettings.jsx

    import React from "react";

    const AccountSettings = () => {
        return (
            <div>
                <h1>Settings</h1>
                <p>This is a nested account settings page</p>
            </div>
        );
    };

    export default AccountSettings;

Then on App, change the routes:

    function App() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="settings" element={<AccountSettings />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </>
        );
    }

Now, /account has a nested route, with settings underneath it.

## useParams Hook -- making pages dynamic

Let's add another component inside the account: AccountUser

    import React from "react";

    const AccountUser = () => {
        return (
            <div>
                <h1>This is account for param: </h1>
            </div>
        );
    };

    export default AccountUser;

And make a route

    function App() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="settings" element={<AccountSettings />} />
                        <Route path=":id" element={<AccountUser />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </>
        );
    }

in AccountUser, import useParams

    import { useParams } from "react-router-dom";

Then in the function:

    const AccountUser = () => {
        const { id } = useParams();
        return (
            <div>
                <h1>This is account for param: {id}</h1>
            </div>
        );

    };

It's id in the curly braces because that's what we called it in the route -- <Route path=":id" />

## State and Props

Let's set up state for the application. On App.jsx, above the return,

    const [user, setUser] = useState("Jaye");

Make sure it imports useState at the top!

You can still use props like normal:

    <Route path="/homepage" element={<Homepage user={user} />} />

Homepage.jsx:

    function Homepage({ user }) {
        return (
            <div>
                <h1>Homepage</h1>
                <h1>Welcome, {user} </h1>
            </div>
        );
    }

But how can we pass data in other ways? Let's give the user a book. On homepage.jsx:

    import { Link } from "react-router-dom";

    function Homepage({ user }) {
        const bookInfo = { name: "Art of War" };
        return (
            <div>
                <h1>Homepage</h1>
                <h1>Welcome, {user} </h1>
                <Link to="/account" state={bookInfo}>
                    Go to account with book info
                </Link>
            </div>
        );
    }

So on that link, we are updating state to include the book info.

Now, on the account.jsx, import the useLocation hook at the top of the page, then make a new variable above the return statement and set it equal to that state. It should render out Art of War.

    import { useLocation } from "react-router-dom";

    function Account() {
        const location = useLocation();
        return (
            <div className="Account">
                <h1>Account</h1>
                <h2>I am currently reading this book: {location?.state?.name}</h2>
            </div>
        );
    }

In the h2, we can put question marks next to location and state to make them optional. That way, if they don't exist, it won't break our code immediately.

Next, on the AccountUser.jsx, let's update that too. Import link at the top from react-router-dom. Then make a new bookInfo like we did on the account page.

    const AccountUser = () => {
        const { id } = useParams();
        const bookInfo = { name: "goblet of fire" };
        return (
            <div>
                <h1>This is account for param: {id}</h1>
                <Link to="/account" state={bookInfo}>
                    Go to account with book info
                </Link>
            </div>
        );
    };

So now, if you go to account/user/123 and click on the link there, it updates state with that new book. So account.jsx should now render goblet of fire instead of art of war.
