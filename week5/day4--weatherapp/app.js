const searchButton = document.querySelector(".search");
const infoDiv = document.querySelector(".info");
const zipInput = document.querySelector(".weather");
const mainContainer = document.querySelector(".main-container");
const locationContainer = document.querySelector(".locationContainer");

const getWeather = async () => {
	const weatherInput = document.querySelector(".weather").value;
	const weatherData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?zip=${weatherInput}&units=imperial&appid=12dc11aa1919fd193bd4c7cd4e5479b1`
	);
	const json = await weatherData.json();
	console.log(json);

	const infoDiv = document.createElement("div");

	const noneDiv = document.createElement("div");
	noneDiv.classList.add("none");

	const deleteButton = document.createElement("button");
	const deleteButtonDiv = document.createElement("div");

	const userLocation = document.createElement("h1");
	const userLocationDiv = document.createElement("div");

	const userTemp = document.createElement("p");
	const userTempDiv = document.createElement("div");

	const userFeelsLike = document.createElement("p");
	const userFeelsLikeDiv = document.createElement("div");

	const userWeatherIcon = document.createElement("img");
	const userWeatherIconDiv = document.createElement("div");

	const userWeatherDescription = document.createElement("p");
	const userWeatherDescriptionDiv = document.createElement("div");

	const userMin = document.createElement("span");
	const userMax = document.createElement("span");
	const userMinMaxDiv = document.createElement("div");

	let location = json.name;
	let temp = Math.trunc(json.main.temp);
	let feelsLike = Math.trunc(json.main.feels_like);
	let icon = json.weather[0]["icon"];
	let description = json.weather[0]["main"];
	let min = Math.trunc(json.main.temp_min);
	let max = Math.trunc(json.main.temp_max);

	infoDiv.classList.add("info");
	infoDiv.classList.add("fade-in");

	deleteButton.innerHTML = "X";
	deleteButton.classList.add("deleteButton");
	deleteButton.addEventListener("click", () => removeLocation(infoDiv));
	deleteButtonDiv.append(deleteButton);
	deleteButtonDiv.classList.add("delete");

	userLocation.innerHTML = location;
	userLocation.classList.add("location");
	userLocationDiv.append(userLocation);
	userLocationDiv.classList.add("header");

	userWeatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	userWeatherIcon.classList.add("weatherPhoto");
	userWeatherIconDiv.append(userWeatherIcon);
	userWeatherIconDiv.classList.add("image");

	if (icon.search("d") >= 0) {
		infoDiv.classList.add("dayTime");
		userWeatherIcon.classList.add("weatherPhotoDay");
	} else {
		infoDiv.classList.add("nightTime");
		userWeatherIcon.classList.add("weatherPhotoNight");
	}

	userTemp.innerHTML = `${temp}&deg;F`;
	userTempDiv.append(userTemp);
	userTempDiv.classList.add("current");

	userFeelsLike.innerHTML = `Feels like ${feelsLike}&deg;F`;
	userFeelsLikeDiv.append(userFeelsLike);
	userFeelsLikeDiv.classList.add("feelsLike");

	userWeatherDescription.innerHTML = `${description}`;
	userWeatherDescriptionDiv.append(userWeatherDescription);
	userWeatherDescriptionDiv.classList.add("imageDescription");

	userMin.innerHTML = `&#8595: ${min}`;
	userMax.innerHTML = `&#8593: ${max}`;
	userMinMaxDiv.append(userMin, userMax);
	userMinMaxDiv.classList.add("tempMinMax");

	infoDiv.append(
		noneDiv,
		deleteButtonDiv,
		userLocationDiv,
		userWeatherIconDiv,
		userTempDiv,
		userFeelsLikeDiv,
		userWeatherDescriptionDiv,
		userMinMaxDiv
	);
	locationContainer.append(infoDiv);
	zipInput.value = "";
};

function removeLocation(div) {
	div.remove();
}

searchButton.addEventListener("click", getWeather);

zipInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		getWeather();
	}
});
