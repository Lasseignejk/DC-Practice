const searchButton = document.querySelector(".search");
const infoDiv = document.querySelector(".info")
const zipInput = document.querySelector(".weather")

const userLocation = document.createElement("h1");
const userTemp = document.createElement("p");
const userFeelsLike = document.createElement("p");
const userWeatherIcon = document.createElement("img");


const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;
  const weatherData = await fetch(

  );
  const json = await weatherData.json();

  console.log(json);

  let location = json.name;
  let temp = json.main.temp;
  let feelsLike = json.main.feels_like;
  let icon = json.weather[0]["icon"];
  console.log(icon)

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

  infoDiv.append(userLocation, userWeatherIcon, userTemp, userFeelsLike)
};

searchButton.addEventListener("click", getWeather);

zipInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather()
    }
})