const searchButton = document.querySelector(".search");
const infoDiv = document.querySelector(".info")
const userLocation = document.createElement("h1");
const userTemp = document.createElement("p");
const userFeelsLike = document.createElement("p");

const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;
  const weatherData = await fetch(
//weather api
  );
  const json = await weatherData.json();

  console.log(json);

  let location = json.name;
  let temp = json.main.temp;
  let feelsLike = json.main.feels_like;


  userLocation.innerHTML = location;
  userLocation.classList.add("location")
  infoDiv.append(userLocation)

  userTemp.innerHTML = `It is ${temp} degrees F.`
  infoDiv.append(userTemp);

  userFeelsLike.innerHTML = `It feels like ${feelsLike} degrees F.`
  infoDiv.append(userFeelsLike);
};

searchButton.addEventListener("click", getWeather);