const searchButton = document.querySelector(".search");
const infoDiv = document.querySelector(".info")
const zipInput = document.querySelector(".weather")
const mainContainer = document.querySelector(".main-container")
const locationContainer = document.querySelector(".locationContainer")




const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;
  const weatherData = await fetch(

  );
  const json = await weatherData.json();
  console.log(json);

  const infoDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  const userLocation = document.createElement("h1");
  const userTemp = document.createElement("p");
  const userFeelsLike = document.createElement("p");
  const userWeatherIcon = document.createElement("img");

  let location = json.name;
  let temp = json.main.temp;
  let feelsLike = json.main.feels_like;
  let icon = json.weather[0]["icon"];
  console.log(icon)

  infoDiv.classList.add("info");

  deleteButton.innerHTML = "X";
  deleteButton.classList.add("deleteButton")
  deleteButton.addEventListener("click", () => removeLocation(infoDiv))

  deleteButton.classList.add("deleteButtonDiv")

  userLocation.innerHTML = location;
  userLocation.classList.add("location")

  userWeatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  if (icon.search("d") >= 0) {
    infoDiv.classList.add("dayTime")
  } else {
    infoDiv.classList.add("nightTime")
  }

  userTemp.innerHTML = `Currently: ${temp}&deg;F`

  userFeelsLike.innerHTML = `Feels like: ${feelsLike} &deg;F` 

  infoDiv.append(deleteButton, userLocation, userWeatherIcon, userTemp, userFeelsLike)
  locationContainer.append(infoDiv)
};

function removeLocation(div) {
    div.remove()
    }

searchButton.addEventListener("click", getWeather);

zipInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather()
    }
})