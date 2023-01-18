const express = require('express')
const {Op} = require("sequelize");
const app = express()
const {Owners,Pets} = require("./models")
const PORT = 3007

app.use(express.json())

app.get("/get_pets", async (req,res) => {
    const pets = await Pets.findAll()
    res.send(pets);
})
app.get("/get_owners", async (req,res) => {
    const owners = await Owners.findAll()
    res.send(owners);
})

app.get("/find_owner", async (req,res) => {
    const ownerName = await Owners.findAll({
        where: {
            firstName: "Jaye",
        }
    })
    res.send(ownerName)
})

app.get("/find_pet", async (req,res) => {
    const petName = await Pets.findAll({
        where: {
            petName: "Sasha",
        }
    })
    res.send(petName)
})

app.get("/find_pet_by_id", async (req,res) => {
    const petId = await Pets.findAll({
        where: {
            id: {
            [Op.gte]:2,
            [Op.lte]:4,
        }
        }
    })
    res.send(petId)
})

app.post("/new_pet", async (req,res) => {
    console.log("hello")
    const {name, type, age} = req.body;
    // ^ called deconstruction. same as writing const age = req.body.age for each thing
    const newPet = await Pets.create({
        petName:name,
        petType:type,
        petAge:age,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send(newPet)
})

app.listen(PORT, console.log(`listening on port ${PORT}`))