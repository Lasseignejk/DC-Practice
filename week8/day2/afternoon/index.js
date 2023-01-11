const express = require("express");
const app = express();
const PORT = 3004;

app.use(express.json());

const people = [
    {
       "_id": "63bdb727780ba01d31293438",
       "index": 0,
       "guid": "dd2886e1-1dbf-4425-92f1-8d74dc760af4",
       "isActive": false,
       "balance": "$1,911.42",
       "picture": "http://placehold.it/32x32",
       "age": 31,
       "eyeColor": "blue",
       "name": "Bass Moody",
       "gender": "male",
       "company": "COMFIRM",
       "email": "bassmoody@comfirm.com",
       "phone": "+1 (862) 453-3311",
       "address": "820 Caton Place, Matthews, Kansas, 1193",
       "about": "Est tempor sint sit velit aliqua. Incididunt nisi voluptate deserunt tempor sint ut eu aute est voluptate ipsum. Cupidatat nulla laboris in ullamco ullamco nostrud ut consequat esse. Irure et Lorem adipisicing excepteur. Consequat dolor elit nostrud irure officia. Ut consectetur officia non sint.\r\n",
       "registered": "2014-01-26T04:27:32 +06:00",
       "latitude": -9.92873,
       "longitude": -1.11275
    },
    {
       "_id": "63bdb727529ca9af46580320",
       "index": 1,
       "guid": "6337863d-6536-4872-9f72-3a2da8f9c535",
       "isActive": false,
       "balance": "$2,295.79",
       "picture": "http://placehold.it/32x32",
       "age": 21,
       "eyeColor": "brown",
       "name": "Browning Gallagher",
       "gender": "male",
       "company": "ELENTRIX",
       "email": "browninggallagher@elentrix.com",
       "phone": "+1 (867) 569-3975",
       "address": "744 Degraw Street, Neahkahnie, Michigan, 7647",
       "about": "Culpa dolore in ea quis nisi magna ea sunt irure id ex. In ut consectetur consectetur commodo velit ullamco ipsum veniam. Velit ut id tempor exercitation sint. Qui anim consequat quis consequat veniam eu ipsum exercitation nostrud qui esse laboris do. Laboris nulla irure sint enim cillum ea est in. Cupidatat dolor esse proident et eiusmod in ut fugiat eiusmod sint et cupidatat esse. Aliqua nostrud esse ex pariatur non esse non cupidatat culpa irure occaecat officia.\r\n",
       "registered": "2021-08-19T01:11:40 +05:00",
       "latitude": -26.761189,
       "longitude": 83.709908
    },
    {
       "_id": "63bdb7272a763e53382d7508",
       "index": 2,
       "guid": "4ba5c939-feba-400f-bd17-c0dbc07f4d27",
       "isActive": false,
       "balance": "$2,599.95",
       "picture": "http://placehold.it/32x32",
       "age": 26,
       "eyeColor": "brown",
       "name": "Lucille Boyer",
       "gender": "female",
       "company": "DIGIPRINT",
       "email": "lucilleboyer@digiprint.com",
       "phone": "+1 (874) 437-3837",
       "address": "239 Norman Avenue, Ferney, Puerto Rico, 3388",
       "about": "Labore voluptate cupidatat consequat minim. Non mollit labore velit do ut exercitation sunt do consectetur officia. Aliqua deserunt fugiat ex ad cillum consectetur sint consequat quis mollit aliqua dolor reprehenderit. Sint labore aliquip labore eiusmod elit veniam sit proident officia.\r\n",
       "registered": "2014-12-31T08:13:40 +06:00",
       "latitude": -22.550823,
       "longitude": -139.597807
    },
    {
       "_id": "63bdb72750c9b3538e7a039a",
       "index": 3,
       "guid": "a155be31-f1d1-46bc-bd72-3e3920c1fd72",
       "isActive": false,
       "balance": "$1,490.03",
       "picture": "http://placehold.it/32x32",
       "age": 24,
       "eyeColor": "brown",
       "name": "Glenda Copeland",
       "gender": "female",
       "company": "NURPLEX",
       "email": "glendacopeland@nurplex.com",
       "phone": "+1 (877) 578-2414",
       "address": "858 Garnet Street, Day, Guam, 7625",
       "about": "Deserunt dolore et irure ad in labore ea officia ad aute labore ullamco. Aute excepteur duis eiusmod officia nisi. Labore nisi in laborum labore duis culpa ipsum et eu anim. Pariatur non duis proident dolor exercitation cupidatat esse sit fugiat. Occaecat officia mollit ea aliqua ex incididunt. Quis occaecat velit commodo amet aliquip Lorem enim non occaecat amet irure. Veniam dolore enim laboris pariatur commodo aute in ad laborum.\r\n",
       "registered": "2015-11-05T09:58:16 +06:00",
       "latitude": -27.284784,
       "longitude": -58.489786
    },
    {
       "_id": "63bdb727eae9bd55d6326ddf",
       "index": 4,
       "guid": "5bc37cff-13cf-43e0-98e1-7a122f2efe59",
       "isActive": true,
       "balance": "$2,443.28",
       "picture": "http://placehold.it/32x32",
       "age": 23,
       "eyeColor": "brown",
       "name": "Benjamin Burke",
       "gender": "male",
       "company": "CYCLONICA",
       "email": "benjaminburke@cyclonica.com",
       "phone": "+1 (887) 537-2149",
       "address": "270 Montrose Avenue, Gibsonia, Connecticut, 9013",
       "about": "Sint elit officia commodo culpa adipisicing reprehenderit commodo occaecat do velit ad nostrud nulla. Aliqua eu exercitation consequat eu labore consectetur ex culpa labore in eu amet anim esse. Nisi ut do elit tempor irure ullamco eiusmod dolor sint labore laborum reprehenderit dolor minim. Reprehenderit enim consectetur exercitation sunt velit consectetur pariatur do tempor. Id cupidatat ea aliqua sit enim incididunt ipsum. Occaecat reprehenderit consequat tempor nulla aliquip amet.\r\n",
       "registered": "2020-11-09T07:24:54 +06:00",
       "latitude": 33.466232,
       "longitude": 88.708841
    },
    {
       "_id": "63bdb727c9bfbd1f62390e9b",
       "index": 5,
       "guid": "d4bf4684-575d-4487-b5d4-b8b2a15b79be",
       "isActive": true,
       "balance": "$3,003.91",
       "picture": "http://placehold.it/32x32",
       "age": 23,
       "eyeColor": "brown",
       "name": "Annmarie Stark",
       "gender": "female",
       "company": "SONGLINES",
       "email": "annmariestark@songlines.com",
       "phone": "+1 (893) 465-3524",
       "address": "659 Minna Street, Buxton, Northern Mariana Islands, 5397",
       "about": "Labore aliqua sit est esse enim. Dolore amet Lorem proident Lorem adipisicing. Veniam sit minim eu nulla exercitation nulla. Ullamco fugiat aute nulla aute quis sit dolor ex excepteur Lorem enim sunt excepteur. Minim ipsum anim officia laborum cillum esse. Nulla aliqua sit veniam est aliqua ullamco reprehenderit. Pariatur ad pariatur pariatur incididunt dolor anim mollit commodo ad quis ut.\r\n",
       "registered": "2019-02-19T08:34:21 +06:00",
       "latitude": 69.728798,
       "longitude": 172.311997
    }
 ]

//  const listOfPeople = JSON.parse(people)


 // write me a get route that gets me all of the names of the users and returns them in an array of strings. only the names. in postman.     expected output: ["bob", "tommy"]
app.get("/user_names", (req, res) => {
    const names = [];
    people.forEach((person) => {
        names.push(person.name)
    })
    // const userNames = people.map((person) => person.name); from Joe
    res.send(names)
})

 // write me a get route that gives me the phone numbers of everyone with an age of 24 (there's only one).     expected output: an array with that person's info inside [{"phone": lkaj;ldfkj;}]
 app.get("/user_phone", (req, res) => {
    const phoneNumbers = [{"phonenumber": 0}];
    people.forEach((person) => {
        if (person.age === 24) {
            phoneNumbers[0].phonenumber = person.phone
        }
    })
    res.send(phoneNumbers)
 })


 // write a get route that gives me back all users over age 21 but under or at age 26.     expected output is the same as above, array with objects inside 
app.get("/user_age", (req, res) => {
    const infoByAge = []
    people.forEach((person) => {
        if (person.age > 21 && person.age <= 26) {
            infoByAge.push(person)
        }
    })
    res.send(infoByAge)
})

 // write me a get route that give me back all the users email addresses     expected output: [{email: emailaddress.com}]
app.get("/user_email", (req, res) => {
    const emailAddresses = [];
    for (let i = 0; i < people.length; i++) {
        const person = {}
        person.email = people[i].email
        emailAddresses.push(person)
    }
    res.send(emailAddresses)
})

// get the total balances of all the users combined, how man men/women there are, the total companies, the name of all the companies, list of all the addresses for the users
// /compileYearEndReport
// expected output: [
//     totalBalances: Number,
//     maleEmployees: Number, 
//     femaleEmployees: Number,
//     totalCompanies: Number,
//     nameOfCompanies: [
//         {username: "Annmarie", companyName: "SONGLINES", _id: "3985984504980"},
//     ]
//     employeeAddresses: [
//         {employee: "Annmarie", address: "blah blah", _id: "989583509384"},
//     ]
// ]
app.get("/compileYearEndReport", (req, res) => {
    const report = [{}];
    let total = 0
    let totalMale = 0
    let totalFemale = 0
    let totalCompanies = 0
    let companyNames = []
    let addresses = []

    // totalBalances
    for (let i = 0; i < people.length; i++) {
        let balance = people[i].balance
        let noDollarSign = balance.slice(1)
        let noComma = parseInt(noDollarSign.replace(",",""))
        total += noComma
    }
    report[0].totalBalances = total

    // maleEmployees
    for (let i = 0; i < people.length; i++) {
        if (people[i].gender === "male") {
            totalMale += 1
        }
        report[0].maleEmployees = totalMale
    }

    // femaleEmployees
    for (let i = 0; i < people.length; i++) {
        if (people[i].gender === "female") {
            totalFemale += 1
        }
        report[0].femaleEmployees = totalFemale
    }

    // totalCompanies
    for (let i = 0; i < people.length; i++) {
        totalCompanies += 1
    }
    report[0].totalCompanies = totalCompanies

    // nameOfCompanies
    for (let i = 0; i < people.length; i++) {
        let company = {}
        company.username = people[i].name;
        company.companyName = people[1].company
        company._id = people[i]._id
        companyNames.push(company)
    }
    report[0].nameOfCompanies = companyNames

    // employeeAddresses
    for (let i = 0; i < people.length; i++) {
        let employeeInfo = {}
        employeeInfo.employee = people[i].name;
        employeeInfo.address = people[i].address;
        employeeInfo._id = people[i]._id
        addresses.push(employeeInfo)
    }
    report[0].employeeAddresses = addresses

    res.send(report)
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));