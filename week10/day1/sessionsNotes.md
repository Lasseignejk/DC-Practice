# Sessions and Elephant SQL

## Elephant SQL

[Elephant SQL website](https://www.elephantsql.com/)

Online Postgres database. There are tons available, we use this one.

Once you make an account, create a new instance. We want the 'Tiny Turtle' plan because it's free. Choose the region that is closest to you; if lots are disabled, that's because those are for paying users.

If you click on your instance, you can see more details. For example, our username is no longer 'postgres', it's now 'user & default database'

The 'url' is how we connect to our database. it contains the username, password, server, etc. Try not to push it to github!

If you click 'browser' on the LHS, it opens up a SQL Browser, a place to look at your tables. If you would rather use Beekeeper or DBeaver, you can enter in your credentials from the database in those things and query it that way.

## Connecting our Elephant SQL Database to Our Server

    npm init -y

    npm i express bcrypt ejs sequelize

Make folders in top-level

    mkdir routes views public

Make folders inside 'views'

    mkdir pages partials

Make index.js file in top-level

Make folder for sequelize

    npm i sequelize-cli
    npx sequelize init

From here, jump to config.json, make some routes, make some models, whatever you want.

We don't need to run db:create because our database already exists on elephantsql.

## Config.json

    username: (user and default database from elephantsql)
    password: (password from elephantsql)
    database: (user and default database)
    host: (server, minus the stuff in the ())
    dialect: 'postgres'

Create a model

    npx sequelize model:generate --name Name --attributes username:string

Migrate

    npx sequelize db:migrate

## EJS login page

## Sessions and Cookies (from Canvas)

What is a cookie?

- A cookie is a small piece of data stored in the user's browser memory.
- Cookies are set by the server, and are included in all future requests to that server.
- I am giving something to authenticate you, so that next time you have a request, I can look at that cookie and give you your information.
- Cookies don't usually contain super detailed information, just stuff like user preferences (dark themes) and if you agreed to the privacy agreements.
- Cookies are forever

What is a session?

- Not stored on the browser, it lives on the server.
- Typically store login information
- Browser requests access to infromation using a username and password.
- server responds, sending back a cookie along with the response.
- The client sends a request to access a protected area, the server checks the cookie. Is this cookie stale? Is it good?

## Making a session

    npm install express-session cookie-parser

Require both of these packages in your main app.js file and then pass both packages to the app.use() function.

    app.use(cookieParser());
    app.use(
        session({
            secret: "secret",
            resave: false,
            saveUninitialized: true,
            cookie: {
                secure: false,
                maxAge: 2592000000,
            },
        })
    );

- secret: used to sign the cookie. Your company will decide what the secret is.
- resave: update the session even if we've done no changes. So like a timeout. If resave is true, it will timeout like a bank website.
- saveUni: start a new session. don't try to restart an old session.
- cookie: secure: false this is because we are on localhost. localhost does not have https.
- cookie: maxAge: how long the cookie is good for, in miliseconds.

## Set some session data

On the form on login.ejs, make your form action="/login"
On your inputs, make sure you give them something in the 'name' field

    const bodyParser = require("body-parser");

    // configure the app to use bodyParser()
    app.use(
    bodyParser.urlencoded({
        extended: true,
    })
    );
    app.use(bodyParser.json());

bodyParser is part of express. It allows us to cut out postman and get the req.body

because we're using an html form, we use bodyParser.

    app.post("/login", async (req, res) => {
        const { username, password } = req.body;
        console.log(req.body);
        res.send("pages/login");
    });

The console.log in the above code will return:
{username: 'forminput', password: 'forminput', submit: 'Login'}

Everything we've done so far is to get access to the input fields.

## Set some session data

Now that your session is configured, you can store some data on it.

You can do this isndie any route handler or middleware using the req.session object.

Require your model at the top of your index.js

    const { Customers } = require("./sequelize/models");

Add seeder data and run the seed command, then run SQL query in elephantsql and you should see your data there.

    npx sequelize db:seed:all

Now, go back to the app.post("/login") that we wrote earlier. We need to check the user's input against our database. We aren't going to set up bcrypt just yet because our passwords are super easy. So instead, we put in an if statement to check.

    app.post("/login", async (req, res) => {
        const { username, password } = req.body;

        const user = await Customers.findOne({
            where: {
                username: username,
            },
        });
        if (user.password === req.body.password) {
            // this is where we will start a session
            res.redirect("/account");
            return;
        } else {
            res.status(400).send("Incorrect username or password");
        }
    });

The above code will break if the password matches because of the code we have on account.ejs, but it still tries to redirect us and stuff which means it's working

if it's working, we need to make sure that req.session has a user. If it does, allow them to continue. Right now, anyone can access the account pages without being logged in. We need to protect the app.get("/account") route now. Middleware!

## Make our own middleware

if (req.session.user), if that exists, then they've been checked. Let them continue. Otherwise, check if they're going to the login page. If they are, let them continue.
Otherwise, redirect to the login page.

Then, update your route:

    app.get("/account", authenticate, (req, res) => {
        console.log(req.session);
        res.render("pages/account");
    });

next() is a built-in function in middleware.

Now, if you just type in localhost:3020/account without being logged in, it'll redirect to the login page. if you console.log(req.sesson), there IS NOT a user in the session, meaning this browser hasn't been authenticated/logged in yet.

So what happens when you logout? it should empty the session or set it to null.

    app.post("/logout", (req, res) => {
        if (req.session) {
            req.session.destroy((err) => {
                res.redirect("/login");
            });
        }
    });

'destroy' removes the session from the server and the database.

We can store the session data inside of a database. We want to do this so that the session data 'persists.' This means that everything will be saved, even if your server refreshes (for updates etc.). Servers are considered volatile. Otherwise, if your server goes offline, everyone will be logged out. That's inconvenient.

## Database Sessions

Install this in the top-level:

    npm i connect-session-sequelize

Then require all your models at the top

    const models = require("./sequelize/models");

Create a new variable, requiring that thing we just made

    const SequelizeStore = require("connect-session-sequelize")(session.Store);

const store = new SequelizeStore({ db: models.sequelize });

In the app.use where the cookie is, delete the cookie code and put store:store, like this:

    app.use(
        session({
            secret: "secret",
            resave: false,
            saveUninitialized: true,
            store:store,
        })
    );

store:store will create the session and the cookie.

Beneath that, type:

    store.sync()

store.sync() will push that data to the database.

Now, if we start our server, it creates a new table called "sessions"

With that done, we can check if a session is valid by looking in the database.

Is there a cookie on this browser? Yes. Check it with the info in the database. Is this cookie still valid? Yes. Send them in.

Check the server to see if they're logged in. If the server goes down, check the database.

## Amazing tool to use for personal projects

[Supabase.com](https://supabase.com/)

Firebase is google's version of Supabase

If you use supabase, you don't need anything to do with sequelize.

**Sign up for an account with Supabase.**

Things like Supabase are not widespread yet though, so probs won't use it at your job.

Supabase is another thing to use to see our tables and stuff. We can edit our columns, add in rows, etc.

    npm install --save @supabase/supabase-js

Require it:

    const {createClient} = require("@supabase/supabase-js)

get stuff from the api documentation

Beekeeper just reads a database.

Supabase lets you read a database, manipulate the data, etc. It's like sequelize and elephantsql got together and made something better.
