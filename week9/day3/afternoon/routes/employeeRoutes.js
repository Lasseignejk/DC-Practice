const express = require('express')
const {Op} = require("sequelize");
const router = express.Router()
const {Employees} = require("../models")

// --------------------EMPLOYEES------------------
// create an entry
router.post("/new_employee", async (req,res) => {
    const {firstName, lastName, clinicId} = req.body;
    const newEmployee = await Employees.create({
        firstName,
        lastName,
        clinicId,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send(newEmployee)
})

// update an entry
router.put("/update_employee_by_id", async (req, res) => {
    const userUpdateId = req.body.id;
    const userEmployeeFirst = req.body.firstName;
    const userEmployeeLast = req.body.lastName;
    const userEmployeeClinic = req.body.clinicId;
    await Employees.update({firstName: userEmployeeFirst, lastName: userEmployeeLast,
    clinicId: userEmployeeClinic}, {
        where: {
            id: userUpdateId
        }
    })
    res.send(`entry ${userUpdateId} was updated.`)
})

// delete an entry
router.delete("/delete_employee_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Employees.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
router.get("/find_employee_by_id", async (req,res) => {
    const userId = req.body.id
    const employeeId = await Employees.findAll({
        where: {
            id: userId
        }
    })
    res.send(employeeId)
})

// find all entries
router.get("/all_employees", async (req,res) => {
    const allEmployees = await Employees.findAll()
    res.send(allEmployees);
})

module.exports = router