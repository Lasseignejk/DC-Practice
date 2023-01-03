const parkImageContainer = document.querySelector(".parkImageContainer")
const parkImageText = document.querySelector(".parkImageText")
const heart = document.querySelector(".heart")
const solidHeart = document.querySelector(".solidHeart")
const solidHeartSpan = document.querySelector(".solidHeartSpan")
const entranceFeeDiv = document.querySelector(".entranceFeeDiv")
const phoneDiv = document.querySelector(".phoneDiv")
const addressDiv = document.querySelector(".addressDiv")
const parkDescription = document.querySelector(".parkDescription")
const parkActivities = document.querySelector(".parkActivities")

const getIndividualPark = async () => {
    const userPark = window.localStorage.getItem('park')
    console.log(userPark)


    const response = await fetch(url)
    // console.log(url)
    const json = await response.json();
    const jsonData = json.data[0]
    console.log(jsonData);

    const jsonName = jsonData.fullName;
    const jsonWeatherInfo = jsonData.weatherInfo;
    const jsonZipCode = jsonData.addresses[0]["postalCode"];
    console.log(jsonZipCode)
    const jsonCity = jsonData.addresses[0]["city"];
    const jsonStreetAddress = jsonData.addresses[0]["line1"];
    const jsonStateCode = jsonData.addresses[0]["stateCode"]
    const jsonImage = jsonData.images[0]["url"];
    const jsonDescription = jsonData.description;
    const jsonParkCode = jsonData.parkCode;
    const jsonActivities = jsonData.activities;
    console.log(jsonActivities)
    for (let i = 0; i < jsonActivities.length; i++) {
        const activitySpan = document.createElement("span");
        activitySpan.innerHTML = `${jsonActivities[i]["name"]}`
        parkActivities.append(activitySpan)
        console.log(jsonActivities[i])
    }


    const jsonParkPhone = jsonData.contacts.phoneNumbers[0]["phoneNumber"]
    const modifyPhone = (phoneNumber) => {
        const removeHyphens = jsonParkPhone.replace(/-/g, '')
        const newPhone = "(" + removeHyphens.slice(0, 3) + ") " + removeHyphens.slice(3, 6) + "-" + removeHyphens.slice(6)
        return newPhone
    }

    const jsonFee = parseInt(jsonData.entranceFees[0]["cost"]);
        const checkEntranceFee = (entranceFee) => {
            if (entranceFee === 0) {
                const jsonEntranceFee = "Free"
                return jsonEntranceFee
            } else {
                const jsonEntranceFee = '$' + jsonFee;
                return jsonEntranceFee
            }
        }

    // const getParkAlerts = async (parkCode) => {

    
    //     const response = await fetch(url)
    //     // console.log(url)
    //     const json = await response.json();
    //     const jsonData = json.data
    //     console.log(jsonData);
    // }

    // getParkAlerts(jsonParkCode)

    //----------------------create-----------------------
    const parkEntranceFees = document.createElement("p")
    const parkAddress = document.createElement("p")
    const parkHours = document.createElement("p")
    const parkPhone = document.createElement("p")

    //-----------------------modify------------------------

    parkImageContainer.style.backgroundImage = `url(${jsonImage})`
    parkImageText.innerHTML = `${jsonName}`
    parkEntranceFees.innerHTML = `${checkEntranceFee(jsonFee)}`
    parkAddress.innerHTML = `${jsonStreetAddress + ", " + jsonCity + ", " + jsonStateCode + " " + jsonZipCode}`
    parkDescription.innerHTML = `${jsonDescription}`
    parkPhone.innerHTML = `${modifyPhone(jsonParkPhone)}`



    //------------------modify classes---------------------

    //----------------------append-----------------------
    entranceFeeDiv.append(parkEntranceFees)
    phoneDiv.append(parkPhone)
    
    addressDiv.append(parkAddress)
}





    //----------------event-listeners-----------------
// heart.addEventListener("mousedown", () => {
//     heart.classList.add("mouseDown");
// });
// heart.addEventListener("mouseup", () => {
//     heart.classList.remove("mouseDown")
// });
heart.addEventListener("click", () => {
    solidHeartSpan.classList.add("showHeart")
});
solidHeart.addEventListener("click", () => {
    solidHeartSpan.classList.remove("showHeart")
})
// solidHeart.addEventListener("mousedown", () => {
//     solidHeart.classList.add("mouseDown")
// })
// solidHeart.addEventListener("mouseup", () => {
//     solidHeart.classList.remove("mouseDown")
// })

getIndividualPark()