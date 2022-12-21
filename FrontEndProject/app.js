const cardContainer = document.querySelector(".cardContainer")

const searchParkAPI = async () => {
    const url = "https://developer.nps.gov/api/v1/parks?stateCode=SC&";
    // const response = await fetch(url, {
    //   method: "GET",
    //   parameters: {
    //     stateCode: "SC",
    //   },
    // });
    const response = await fetch(url)
    const json = await response.json();
    console.log(json);

    
    jsonName = json.data[0].fullName;
    jsonState = json.data[0].states;
    jsonWeatherInfo = json.data[0].weatherInfo;

    const card = document.createElement("div");
    const parkName = document.createElement("h1");
    const parkState = document.createElement("h2");
    const parkWeatherInfo = document.createElement("p")

    parkName.innerHTML = `${jsonName}`;
    parkState.innerHTML = `${jsonState}`;
    parkWeatherInfo.innerHTML = `${jsonWeatherInfo}`;

    card.append(parkName, parkState, parkWeatherInfo)
    cardContainer.append(card)
  };

searchParkAPI()