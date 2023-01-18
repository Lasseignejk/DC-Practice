const express = require('express')
const {Op} = require("sequelize");
const app = express()
const {Clinics, Employees, Patients} = require("./models")
const PORT = 3012

app.use(express.json())

//FOR EACH MODEL
// create an entry
// update an entry
// delete an entry
// find one entry based on a criteria
// find all entries

// ---------------------CLINICS------------------
// create an entry
app.post("/new_clinic", async (req,res) => {
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
app.put("/update_clinic_by_id", async (req, res) => {
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
app.delete("/delete_clinic_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Clinics.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
app.get("/find_clinic_by_id", async (req,res) => {
    const userId = req.body.id
    const clinicId = await Clinics.findAll({
        where: {
            id: userId
        }
    })
    res.send(clinicId)
})

// find all entries
app.get("/all_clinics", async (req,res) => {
    const allClinics = await Clinics.findAll()
    res.send(allClinics);
})


// --------------------EMPLOYEES------------------
// create an entry
app.post("/new_employee", async (req,res) => {
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
app.put("/update_employee_by_id", async (req, res) => {
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
app.delete("/delete_employee_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Employees.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
app.get("/find_employee_by_id", async (req,res) => {
    const userId = req.body.id
    const employeeId = await Employees.findAll({
        where: {
            id: userId
        }
    })
    res.send(employeeId)
})

// find all entries
app.get("/all_employees", async (req,res) => {
    const allEmployees = await Employees.findAll()
    res.send(allEmployees);
})


// --------------------PATIENTS------------------
// create an entry
app.post("/new_patient", async (req,res) => {
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
app.put("/update_patient_by_id", async (req, res) => {
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
app.delete("/delete_patient_by_id", async (req,res) => {
    const userDeleteId = req.body.id
    await Patients.destroy({
        where: {
            id: userDeleteId
        }
    })
    res.send(`entry ${userDeleteId} was deleted.`)
})

// find one entry based on a criteria
app.get("/find_patient_by_id", async (req,res) => {
    const userId = req.body.id
    const patientId = await Patients.findAll({
        where: {
            id: userId
        }
    })
    res.send(patientId)
})

// find all entries
app.get("/all_patients", async (req,res) => {
    const allPatients = await Patients.findAll()
    res.send(allPatients);
})

app.listen(PORT, console.log(`listening on port ${PORT}`))