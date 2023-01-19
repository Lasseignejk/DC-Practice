const express = require('express')
const {Op} = require("sequelize");
const router = express.Router()
const {Patients} = require("../models")


// --------------------PATIENTS------------------
// create an entry
router.post("/new_patient", async (req,res) => {
    const {firstName, lastName, employeeAssignedId} = req.body;
    const newPatient = await Patients.create({
        firstName,
        lastName,
        employeeAssignedId,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send(newPatient)
})

// update an entry
router.put("/update_patient_by_id", async (req, res) => {
    const userUpdateId = req.body.id;
    const userPatientFirst = req.body.firstName;
    const userPatientLast = req.body.lastName;
    const userPatientEmployee = req.body.employeeAssignedId;
    await Patients.update({firstName: userPatientFirst, lastName: userPatientLast,
    employeeAssignedId: userPatientEmployee}, {
        where: {
            id: userUpdateId
        }
    })
    res.send(`entry ${userUpdateId} was updated.`)
})

// delete an entry
router.delete("/delete_patient_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Patients.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
router.get("/find_patient_by_id", async (req,res) => {
    const userId = req.body.id
    const patientId = await Patients.findAll({
        where: {
            id: userId
        }
    })
    res.send(patientId)
})

// find all entries
router.get("/all_patients", async (req,res) => {
    const allPatients = await Patients.findAll()
    res.send(allPatients);
})


module.exports = router