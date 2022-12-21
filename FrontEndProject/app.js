const cardContainer = document.querySelector(".cardContainer")

const searchParkAPI = async () => {

    // const response = await fetch(url, {
    //   method: "GET",
    //   parameters: {
    //     stateCode: "SC",
    //   },
    // });

    const response = await fetch(url)
    const json = await response.json();
    const jsonData = json.data
    console.log(json);
    console.log(jsonData)
    for (const item of jsonData) {
        console.log(item)
        jsonName = item.fullName;
        jsonState = item.states;
        jsonWeatherInfo = item.weatherInfo;

        const card = document.createElement("div");
        const parkName = document.createElement("h1");
        const parkState = document.createElement("h2");
        const parkWeatherInfo = document.createElement("p")

        parkName.innerHTML = `${jsonName}`;
        parkState.innerHTML = `${jsonState}`;
        parkWeatherInfo.innerHTML = `${jsonWeatherInfo}`;

        card.append(parkName, parkState, parkWeatherInfo)
        cardContainer.append(card)
    }

}
//   };

searchParkAPI()