const topRestaurants = [
	{
		name: "Noma",
		location: "Copenhagen, Denmark",
		cuisine: "New Nordic",
		rating: 4.7,
	},
	{
		name: "Osteria Francescana",
		location: "Modena, Italy",
		cuisine: "Italian",
		rating: 4.6,
	},
	{
		name: "El Celler de Can Roca",
		location: "Girona, Spain",
		cuisine: "Spanish",
		rating: 4.5,
	},
	{
		name: "Mirazur",
		location: "Menton, France",
		cuisine: "French",
		rating: 4.4,
	},
	{
		name: "Eleven Madison Park",
		location: "New York City, United States",
		cuisine: "New American",
		rating: 4.3,
	},
];

const container = document.querySelector(".container");

const restaurantCard = document.createElement("div");
const restaurantTitle = document.createElement("h1");
const restaurantLocation = document.createElement("h2");
