// --------------------hamburger menu------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

const cardContainer = document.querySelector(".cardContainer")
window.localStorage.removeItem('park');
window.localStorage.removeItem('searchPark')

const searchParkAPI = async () => {

    cardContainer.innerHTML="";
    const stateValue = document.querySelector(".stateSelect").value;
    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateValue}&api_key=YOUR KEY`;

    const response = await fetch(url)
    const json = await response.json();
    const jsonData = json.data

    for (const item of jsonData) {
        const jsonName = item.fullName;
        const jsonState = item.states;
        const jsonZipCode = item.addresses[0]["postalCode"];
        const jsonCity = item.addresses[0]["city"];
        const jsonStreetAddress = item.addresses[0]["line1"];
        const jsonStateCode = item.addresses[0]["stateCode"]
        const jsonImage = item.images[0]["url"];
        const jsonDescription = item.description;
        const jsonParkCode = item.parkCode

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

        // -----------------------modify------------------------
        parkPhoto.src = `${jsonImage}`
        parkName.innerHTML = `${jsonName}`;
        const parkStateSpaced = addSpace(jsonState)
        parkState.innerHTML = `${checkStateLength(parkStateSpaced)}`;
        parkAddress.innerHTML = `${jsonStreetAddress + ", " + jsonCity + ", " + jsonStateCode + " " + jsonZipCode}`
        parkDescription.innerHTML = `${checkDescriptionLength(jsonDescription)}`
        readMoreButton.innerHTML = "Read More"
        readMoreButton.value = jsonParkCode
        readMoreButtonLink.href = "../individualParkPage/individualPark.html"

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
        cardContainer.classList.add("displayCardContainer")

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


const stateSelect = document.querySelector(".stateSelect")
stateSelect.addEventListener("change", searchParkAPI)