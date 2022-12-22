const cardContainer = document.querySelector(".cardContainer")


input = "SC"
const searchParkAPI = async () => {
    cardContainer.innerHTML="";
    const searchField = document.querySelector(".inputField").value.toUpperCase();
  
    // const response = await fetch(url, {
    //   method: "GET",
    //   parameters: {
    //     stateCode: "SC",
    //   },
    // });

    const response = await fetch(url)
    console.log(url)
    const json = await response.json();
    const jsonData = json.data
    console.log(json);
    console.log(jsonData)
    for (const item of jsonData) {
        console.log(item)
        jsonName = item.fullName;
        jsonState = item.states;
        // jsonWeatherInfo = item.weatherInfo;
        jsonZipCode = item.addresses[0]["postalCode"];
        jsonCity = item.addresses[0]["city"];
        jsonStreetAddress = item.addresses[0]["line1"];
        jsonStateCode = item.addresses[0]["stateCode"]
        jsonImage = item.images[0]["url"];
        jsonDescription = item.description;
        // jsonFee = parseInt(item.entranceFees[0]["cost"]);
        // console.log(jsonFee) 
        // const checkEntranceFee = (entranceFee) => {
        //     if (entranceFee === 0) {
        //         const jsonEntranceFee = "Free!"
        //         return jsonEntranceFee
        //     } else {
        //         const jsonEntranceFee = '$' + jsonFee;
        //         return jsonEntranceFee
        //     }
        // }

        // ----------------------create-----------------------
        const card = document.createElement("div");
        const front = document.createElement("div");
        const back = document.createElement("div");
        const parkName = document.createElement("h1");
        const parkState = document.createElement("h2");
        const parkAddress = document.createElement("p");
        const parkDescription = document.createElement("p");

        const checkDescriptionLength = (str) => {
            if (str.length > 380) {
                const slicedString = str.slice(0, 380);
                const newString = slicedString + "..."
                return newString
            } else {
                const newString = str;
                return newString
            }
        }
        // const parkActivities = document.createElement("span");
        // const parkEntranceFees = document.createElement("p");
        // const parkWeatherInfo = document.createElement("p");

        // -----------------------modify------------------------
        front.style.backgroundImage = `url(${jsonImage})`
        parkName.innerHTML = `${jsonName}`;
        parkState.innerHTML = `${jsonState}`;
        parkAddress.innerHTML = `Address: ${jsonStreetAddress + ", " + jsonCity + ", " + jsonStateCode + " " + jsonZipCode}`
        parkDescription.innerHTML = `${checkDescriptionLength(jsonDescription)}`
        // parkEntranceFees.innerHTML = `Entrance Fee: ${checkEntranceFee(jsonFee)}`
        // parkWeatherInfo.innerHTML = `${jsonWeatherInfo}`;

        // ------------------modify classes---------------------
        card.classList.add("card")
        front.classList.add("front")
        back.classList.add("back")
        parkName.classList.add("parkName")
        parkState.classList.add("parkState")

        // ----------------------append-----------------------
        front.append(parkName, parkState)
        back.append(parkAddress, parkDescription)
        card.append(front, back)
        cardContainer.append(card)
    }

}

// ------------------Event listeners--------------------
const searchButton = document.querySelector(".searchButton")

searchButton.addEventListener("click", searchParkAPI)


const searchField = document.querySelector(".inputField")
searchField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchParkAPI()
    }
}) 