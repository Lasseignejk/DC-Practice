const parkImageContainer = document.querySelector(".parkImageContainer")
const parkImageText = document.querySelector(".parkImageText")
const entranceFeeDiv = document.querySelector(".entranceFeeDiv")
const phoneDiv = document.querySelector(".phoneDiv")
const addressDiv = document.querySelector(".addressDiv")
const parkDescription = document.querySelector(".parkDescription")
const parkActivities = document.querySelector(".parkActivities")
const alertContainer = document.querySelector(".alertContainer")
const alertButton = document.querySelector(".alertButton")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".closeModal")
const modalText = document.querySelector(".modalText")


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

// ----------------------functionality-----------------------
const getIndividualPark = async () => {
    const parkCode = window.localStorage.getItem('park')
    const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=YOUR KEY`;

    const response = await fetch(url)
    const json = await response.json();
    const jsonData = json.data[0]

    const jsonName = jsonData.fullName;
    document.title = jsonName;
    const jsonZipCode = jsonData.addresses[0]["postalCode"];
    const jsonCity = jsonData.addresses[0]["city"];
    const jsonStreetAddress = jsonData.addresses[0]["line1"];
    const jsonStateCode = jsonData.addresses[0]["stateCode"]
    const jsonImage = jsonData.images[0]["url"];
    const jsonDescription = jsonData.description;
    const jsonParkCode = jsonData.parkCode;
    const jsonActivities = jsonData.activities;

    for (let i = 0; i < jsonActivities.length; i++) {
        const activitySpan = document.createElement("span");
        activitySpan.innerHTML = `${jsonActivities[i]["name"]}`
        parkActivities.append(activitySpan)
    }

    const jsonParkPhone = jsonData.contacts.phoneNumbers[0]["phoneNumber"]
    const modifyPhone = (phoneNumber) => {
        const removeHyphens = jsonParkPhone.replace(/-/g, '')
        const newPhone = "(" + removeHyphens.slice(0, 3) + ") " + removeHyphens.slice(3, 6) + "-" + removeHyphens.slice(6)
        return newPhone
    }

    const jsonFee = jsonData.entranceFees;
        const checkEntranceFee = (entranceFee) => {
            if (entranceFee.length === 0) {
                const jsonEntranceFee = "Free"
                return jsonEntranceFee
            } else {
                    const money = parseInt(jsonFee[0]["cost"])
                    if (money === 0) {
                        const jsonEntranceFee = "Free"
                        return jsonEntranceFee
                    } else {
                        const jsonEntranceFee = '$' + money;
                        return jsonEntranceFee
                    }
                }
            }

    const getParkAlerts = async (parkCode) => {
        const url = `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=YOUR KEY`;
    
        const response = await fetch(url)
        const json = await response.json();
        const jsonData = json.data

        const checkAlert = (jsonData) => {
            if (jsonData.length >= 1) {

                const alertButton = document.createElement("button")
                alertButton.classList.add("showAlerts")
                alertButton.classList.add("alertButton")
                alertButton.classList.add("openModal")
                const modal = document.createElement("div")
                modal.classList.add("modal")
                const modalText = document.createElement("div")
                modalText.classList.add("modalText")
                const closeModal = document.createElement("button")
                closeModal.classList.add("closeModal")
                closeModal.innerHTML = "X"
                modalText.append(closeModal)

                for (let i = 0; i < jsonData.length; i++) {
                    const alertTitle = document.createElement("h2");
                    alertTitle.classList.add("alertTitle")
                    alertTitle.innerHTML = `${jsonData[i]["title"]}`
                    const alertDescription = document.createElement("p");
                    alertDescription.classList.add("alertDescription")
                    alertDescription.innerHTML = `${jsonData[i]["description"]}`
                    modalText.append(alertTitle, alertDescription)
                    modal.append(modalText)
                    alertContainer.append(alertButton, modal)
                } 
                if (jsonData.length === 1) {
                    alertButton.innerHTML = "Click here to see 1 alert for this location."
                } else if (jsonData.length > 1) {
                    alertButton.innerHTML = `Click here to see ${jsonData.length} alerts for this location.`  
                }
                alertButton.addEventListener("click", () => {
                    modal.style.display = "block";
                })
                closeModal.addEventListener("click", () => {
                    modal.style.display = "none";
                })
                window.addEventListener("click", (e) => {
                    if (e.target == modal) {
                        modal.style.display = "none";
                    }
                })
             
            } else {
                alertContainer.remove()
            }
        }
        checkAlert(jsonData)
        }

    getParkAlerts(jsonParkCode)

    //----------------------create-----------------------
    const parkEntranceFees = document.createElement("p")
    const parkAddress = document.createElement("p")
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

getIndividualPark()