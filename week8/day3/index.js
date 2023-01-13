const express = require("express");
const app = express();
const PORT = 3005;
const data = require("./data");

// MIDDLEWARE
// hey, here's where the static files are
app.use(express.static(__dirname + "/public"));
// if you don't have this line of code, ejs won't work.
app.set("view engine", "ejs");
// MIDDLEWARE

// routes
app.get("/", (req, res) => {
	const mascots = [
		{ name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
		{ name: "Tux", organization: "Linux", birth_year: 1996 },
		{ name: "Moby Dock", organization: "Docker", birth_year: 2013 },
	];
	res.render("pages/index", {
		mascots: mascots,
	});
});

app.get("/about", (req, res) => {
	res.render("pages/about");
});

app.get("/about_me", (req, res) => {
	const me = {
		name: "Jaye",
		occupation: "Software Engineer",
		pic: "https://media.licdn.com/dms/image/C4E03AQEdYRurdDR0zA/profile-displayphoto-shrink_800_800/0/1645268855560?e=1678924800&v=beta&t=DFfxsELHr4mb4WUb8SxjNP2uXxZQk8fyv3R1ePHcP3I",
		description:
			"I'm from Greenville, SC. My favorite color is blue, favorite anime is FMA Brotherhood, and I can speak conversational Japanese.",
	};
	res.render("pages/about_me", {
		me: me,
	});
});

app.get("/dashboard", (req, res) => {
	const navItems = [
		{pic: "/assets/house.png", title: "Home" },
		{pic: "/assets/smile.png", title: "Team" },
		{pic: "/assets/book.png", title: "Tasks" },
		{pic: "/assets/clipboard.png", title: "Leaves" },
		{pic: "/assets/folder.png", title: "Projects" },
		{pic: "/assets/clock.png", title: "Timesheet" },
		{pic: "/assets/openbook.png", title: "Contacts" },
		{pic: "/assets/gear.png", title: "Account" },
	];
	const accountBalance = {
		amount: "$123,233,322,000.09",
	};
	const pending = {
		amount: "$46,788.21",
	};
	const processedData = {
		amount: "$657,441.22",
	};
	res.render("pages/dashboard", {
		data: data,
		navItems: navItems,
		accountBalance: accountBalance,
		pending: pending,
		processedData: processedData,
	});
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
