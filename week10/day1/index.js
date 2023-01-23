const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3020;
const bodyParser = require("body-parser");
const { Customers } = require("./sequelize/models");
const models = require("./sequelize/models");

// Middleware
app.use(express.json());

// configure the app to use bodyParser()
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());

app.use(cookieParser());

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({ db: models.sequelize });

app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: true,
		store: store,
	})
);
store.sync();
app.set("view engine", "ejs");

const authenticate = (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		res.redirect("/login");
	}
};

// Middleware

app.get("/login", (req, res) => {
	res.render("pages/login");
});

app.get("/dashboard", authenticate, (req, res) => {
	res.render("pages/dashboard");
});

app.get("/account", authenticate, (req, res) => {
	res.render("pages/account");
});

app.post("/logout", (req, res) => {
	if (req.session) {
		req.session.destroy((err) => {
			res.redirect("/login");
		});
	}
});

app.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const user = await Customers.findOne({
		where: {
			username: username,
		},
	});
	if (user.password === req.body.password) {
		// if the password works, set the session. start the session.
		req.session.user = user.dataValues;
		res.redirect("/account");
		return;
	} else {
		res.status(400).send("Incorrect username or password");
	}
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
