const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3021;
const bodyParser = require("body-parser");
const models = require("./sequelize/models");

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

app.listen(PORT, console.log(`Listening on port ${PORT}`));
