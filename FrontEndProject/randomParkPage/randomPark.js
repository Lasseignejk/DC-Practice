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

const listOfParkCodes = [
    "abli",
    "acad",
    "adam",
    "afam",
    "afbg",
    "agfo",
    "alka",
    "alag",
    "anch",
    "alca",
    "aleu",
    "alfl",
    "alpo",
    "amch",
    "amme",
    "amis",
    "anac",
    "ande",
    "anjo",
    "ania",
    "anti",
    "apis",
    "appa",
    "apco",
    "arch",
    "arpo",
    "arho",
    "asis",
    "azru",
    "badl",
    "bawa",
    "band",
    "bepa",
    "beol",
    "bela",
    "bibe",
    "bicy",
    "biho",
    "biso",
    "bith",
    "bica",
    "bicr",
    "bisc",
    "blca",
    "blrv",
    "blri",
    "blue",
    "bowa",
    "boaf",
    "boha",
    "bost",
    "brcr",
    "brvb",
    "brca",
    "buis",
    "buff",
    "cabr",
    "cali",
    "cane",
    "cana",
    "cari",
    "cach",
    "cany",
    "caco",
    "caha",
    "came",
    "cakr",
    "calo",
    "cahi",
    "care",
    "cajo",
    "cavo",
    "carl",
    "cave",
    "cawo",
    "cagr",
    "casa",
    "cacl",
    "camo",
    "cato",
    "cebr",
    "cebe",
    "chcu",
    "cham",
    "chis",
    "chpi",
    "chyo",
    "chat",
    "choh",
    "cbpo",
    "chch",
    "chic",
    "chir",
    "chri",
    "ciro",
    "cwdw",
    "clba",
    "colo",
    "colm",
    "colt",
    "cong",
    "coga",
    "coro",
    "cowp",
    "crla",
    "crmo",
    "cuga",
    "cuis",
    "cure",
    "cuva",
    "cech",
    "daav",
    "deso",
    "deva",
    "dewa",
    "dena",
    "depo",
    "deto",
    "dino",
    "drto",
    "ddem",
    "ebla",
    "edal",
    "efmo",
    "eise",
    "elca",
    "elte",
    "elma",
    "elmo",
    "elro",
    "elis",
    "euon",
    "ever",
    "feha",
    "fiis",
    "fila",
    "frst",
    "flni",
    "flfo",
    "foth",
    "fobo",
    "foda",
    "fodo",
    "fodu",
    "fofo",
    "fofr",
    "fola",
    "fols",
    "foma",
    "fomc",
    "fomr",
    "fone",
    "fopo",
    "fopu",
    "fora",
    "fosc",
    "fosm",
    "fost",
    "fosu",
    "foun",
    "fous",
    "fova",
    "fowa",
    "fobu",
    "frde",
    "frdo",
    "frla",
    "frsp",
    "frri",
    "frhi",
    "gaar",
    "jeff",
    "gate",
    "gari",
    "gegr",
    "gero",
    "gewa",
    "gwca",
    "gwmp",
    "gett",
    "gicl",
    "glba",
    "glac",
    "glca",
    "glec",
    "glde",
    "goga",
    "gosp",
    "gois",
    "grca",
    "para",
    "grpo",
    "grte",
    "grko",
    "grba",
    "greg",
    "grfa",
    "grsa",
    "grsm",
    "grsp",
    "gree",
    "gumo",
    "guco",
    "guis",
    "hafo",
    "hale",
    "hagr",
    "hamp",
    "haha",
    "hafe",
    "hart",
    "hatu",
    "hstr",
    "havo",
    "heho",
    "jame",
    "hofr",
    "home",
    "hono",
    "hocu",
    "hofu",
    "hobe",
    "hosp",
    "hove",
    "hutr",
    "iafl",
    "iatr",
    "inde",
    "indu",
    "isro",
    "inup",
    "jaga",
    "jela",
    "jeca",
    "jica",
    "joda",
    "jofi",
    "jomu",
    "jofl",
    "jotr",
    "juba",
    "kala",
    "kaho",
    "kaww",
    "katm",
    "kefj",
    "keaq",
    "kemo",
    "kewe",
    "kimo",
    "klse",
    "klgo",
    "knri",
    "kova",
    "kowa",
    "lyba",
    "lacl",
    "lake",
    "lamr",
    "laro",
    "lavo",
    "labe",
    "lecl",
    "lewi",
    "libo",
    "liho",
    "linc",
    "libi",
    "liri",
    "chsc",
    "long",
    "lowe",
    "lode",
    "loea",
    "lyjo",
    "mawa",
    "maac",
    "maca",
    "mana",
    "mapr",
    "manz",
    "mabi",
    "mlkm",
    "malu",
    "mava",
    "mamc",
    "memy",
    "meve",
    "misp",
    "miin",
    "mima",
    "mimi",
    "miss",
    "mnrr",
    "moja",
    "mono",
    "moca",
    "mocr",
    "mopi",
    "morr",
    "mora",
    "moru",
    "muwo",
    "natc",
    "natt",
    "natr",
    "nace",
    "nama",
    "npsa",
    "npnh",
    "nabr",
    "nava",
    "nebe",
    "neen",
    "pine",
    "jazz",
    "neri",
    "nepe",
    "nico",
    "nisi",
    "niob",
    "noat",
    "noca",
    "noco",
    "obed",
    "ocmu",
    "okci",
    "olsp",
    "olym",
    "orca",
    "oreg",
    "orpi",
    "ovvi",
    "oxhi",
    "ozar",
    "pais",
    "paal",
    "pagr",
    "peri",
    "valr",
    "peco",
    "paav",
    "pevi",
    "pete",
    "pefo",
    "petr",
    "piro",
    "pinn",
    "pisp",
    "pipe",
    "pisc",
    "pore",
    "poex",
    "poch",
    "pohe",
    "popo",
    "wicl",
    "whho",
    "prsf",
    "prwi",
    "pull",
    "puho",
    "puhe",
    "rabr",
    "reer",
    "redw",
    "rich",
    "rigr",
    "rira",
    "rocr",
    "romo",
    "rowi",
    "roca",
    "rori",
    "ruca",
    "sahi",
    "sagu",
    "sacr",
    "sacn",
    "sapa",
    "saga",
    "sama",
    "sapu",
    "sari",
    "saan",
    "safr",
    "sajh",
    "saju",
    "sand",
    "safe",
    "samo",
    "sara",
    "sair",
    "scbl",
    "semo",
    "seki",
    "shen",
    "shil",
    "sitk",
    "slbe",
    "spar",
    "stsp",
    "stli",
    "stge",
    "stea",
    "stri",
    "ston",
    "sucr",
    "tapr",
    "thko",
    "thrb",
    "thri",
    "this",
    "thro",
    "thco",
    "edis",
    "thje",
    "thst",
    "tica",
    "timu",
    "tont",
    "tosy",
    "trte",
    "tule",
    "tusk",
    "tuma",
    "tupe",
    "tuai",
    "tuin",
    "tuzi",
    "ulsg",
    "upde",
    "vall",
    "vafo",
    "vama",
    "vick",
    "vive",
    "vicr",
    "viis",
    "voya",
    "waco",
    "waca",
    "wapa",
    "wamo",
    "waro",
    "waba",
    "wefa",
    "whis",
    "whsa",
    "whmi",
    "wiho",
    "wicr",
    "wica",
    "wing",
    "wotr",
    "wori",
    "wwim",
    "wwii",
    "wrst",
    "wrbr",
    "wupa",
    "yell",
    "york",
    "yose",
    "yuho",
    "yuch",
    "zion"]

// --------------random park on load---------------
const randomParkAPI = async () => {

    const randomIndex = Math.floor(Math.random()*467)
    const randomParkCode = listOfParkCodes[randomIndex]
    const url = `https://developer.nps.gov/api/v1/parks?parkCode=${randomParkCode}&api_key=YOUR KEY`;

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

randomParkAPI()
