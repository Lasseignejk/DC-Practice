// look up lazy-load, infinite scrolling 

const cardContainer = document.querySelector(".cardContainer")
window.localStorage.removeItem('park');

const searchParkAPI = async () => {

    cardContainer.innerHTML="";
    // const searchField = document.querySelector(".inputField").value.toUpperCase();
    const stateValue = document.querySelector(".stateSelect").value;

    // const response = await fetch(url, {
    //   method: "GET",
    //   parameters: {
    //     stateCode: "SC",
    //   },
    // });

    const response = await fetch(url)
    // console.log(url)
    const json = await response.json();
    const jsonData = json.data
    // console.log(json);
    // console.log(jsonData)
    for (const item of jsonData) {
        // console.log(item)
        jsonName = item.fullName;
        jsonState = item.states;
        // jsonWeatherInfo = item.weatherInfo;
        jsonZipCode = item.addresses[0]["postalCode"];
        jsonCity = item.addresses[0]["city"];
        jsonStreetAddress = item.addresses[0]["line1"];
        jsonStateCode = item.addresses[0]["stateCode"]
        jsonImage = item.images[0]["url"];
        jsonDescription = item.description;
        jsonParkID = item.id;
        console.log(jsonParkID)

        // ----------------------create-----------------------
        const card = document.createElement("div");
        const front = document.createElement("div");
        const parkPhotoDiv = document.createElement("div");
        const parkPhoto = document.createElement("img");
        const parkStateDiv = document.createElement("div");
        const parkFrontInfo = document.createElement("div");
        const back = document.createElement("div");
        const parkName = document.createElement("h1");
        const parkState = document.createElement("h2");
        const parkAddress = document.createElement("p");
        const parkDescription = document.createElement("p");
        const parkPhotoBackup = document.createElement("i")
        const readMoreButton = document.createElement("button")
        const readMoreButtonDiv = document.createElement("div")
        const readMoreButtonLink = document.createElement("a")

        // ---------------------functions----------------------
        const checkDescriptionLength = (str) => {
            if (str.length > 230) {
                const slicedString = str.slice(0, 230);
                const newString = slicedString + "..."
                return newString
            } else {
                const newString = str;
                return newString
            }
        }

        const addSpace = (str) => {
            return str.split(',').join(', ');
        }

        const checkStateLength = (str) => {
            if (str.length > 20) {
                const slicedString = str.slice(0, 18);
                const newString = slicedString + "..."
                return newString
            } else {
                const newString = str;
                return newString
            }
        }

        // const parkActivities = document.createElement("span");
        // const parkWeatherInfo = document.createElement("p");

        // -----------------------modify------------------------
        // front.style.backgroundImage = `url(${jsonImage})`
        parkPhoto.src = `${jsonImage}`
        parkName.innerHTML = `${jsonName}`;
        const parkStateSpaced = addSpace(jsonState)
        parkState.innerHTML = `${checkStateLength(parkStateSpaced)}`;
        parkAddress.innerHTML = `Address: ${jsonStreetAddress + ", " + jsonCity + ", " + jsonStateCode + " " + jsonZipCode}`
        parkDescription.innerHTML = `${checkDescriptionLength(jsonDescription)}`
        readMoreButton.innerHTML = "Read More"
        readMoreButton.value = jsonParkID
        readMoreButtonLink.href = "individualPark.html"

        // parkWeatherInfo.innerHTML = `${jsonWeatherInfo}`;

        // ------------------modify classes---------------------
        card.classList.add("card")
        front.classList.add("front")
        parkPhoto.classList.add("parkPhoto")
        parkPhotoBackup.classList.add("fa-solid")
        parkPhotoBackup.classList.add("fa-tree")
        parkPhotoBackup.classList.add("backup")
        parkPhotoDiv.classList.add("parkPhotoDiv")
        back.classList.add("back")
        parkName.classList.add("parkName")
        parkState.classList.add("parkState")
        parkFrontInfo.classList.add("parkFrontInfo")
        parkStateDiv.classList.add("parkStateDiv")
        readMoreButton.classList.add("readMoreButton")
        readMoreButtonDiv.classList.add("readMoreButtonDiv")

        // ----------------------append-----------------------
        parkPhotoDiv.append(parkPhotoBackup, parkPhoto)
        parkStateDiv.append(parkState)
        parkFrontInfo.append(parkPhotoDiv, parkName)
        front.append(parkFrontInfo, parkStateDiv)
        readMoreButtonLink.append(readMoreButton)
        readMoreButtonDiv.append(readMoreButtonLink)
        back.append(parkAddress, parkDescription, readMoreButtonDiv)
        card.append(front, back)
        cardContainer.append(card)

        // ------------------ event listeners -----------------
        card.addEventListener("click", () => {
            card.classList.toggle("switch")
        })
        readMoreButton.addEventListener("click", () => {
            window.localStorage.setItem('park', readMoreButton.value)
        })
    }

}


// ------------------Event listeners--------------------
// const searchButton = document.querySelector(".searchButton")
// searchButton.addEventListener("click", searchParkAPI)

// const searchField = document.querySelector(".inputField")
// searchField.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         searchParkAPI()
//     }
// }) 


const stateSelect = document.querySelector(".stateSelect")
stateSelect.addEventListener("change", searchParkAPI)