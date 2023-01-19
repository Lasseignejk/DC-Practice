const express = require('express')
const {Op} = require("sequelize");
const router = express.Router()
const {Clinics} = require("../models")

// ---------------------CLINICS------------------
// create an entry
router.post("/new_clinic", async (req,res) => {
    const {clinicName, location, size} = req.body;
    const newClinic = await Clinics.create({
        clinicName,
        location,
        size,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send(newClinic)
})

// update an entry
router.put("/update_clinic_by_id", async (req, res) => {
    const userUpdateId = req.body.id;
    const userClinicLocation = req.body.location;
    const userClinicName = req.body.clinicName;
    await Clinics.update({clinicName: userClinicName, location: userClinicLocation}, {
        where: {
            id: userUpdateId
        }
    })
    res.send(`entry ${userUpdateId} was updated.`)
})

// delete an entry
router.delete("/delete_clinic_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Clinics.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
router.get("/find_clinic_by_id", async (req,res) => {
    const userId = req.body.id
    const clinicId = await Clinics.findAll({
        where: {
            id: userId
        }
    })
    res.send(clinicId)
})

// find all entries
router.get("/all_clinics", async (req,res) => {
    const allClinics = await Clinics.findAll()
    res.send(allClinics);
})


module.exports = router