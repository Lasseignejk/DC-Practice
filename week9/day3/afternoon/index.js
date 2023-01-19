const express = require('express')
const {Op} = require("sequelize");

const app = express()
const clinicRoutes = require("./routes/clinicRoutes")
const authRoutes = require("./routes/authRoutes")
const employeeRoutes = require("./routes/employeeRoutes")
const patientRoutes = require("./routes/patientRoutes")
const PORT = 3012


app.use(express.json());

app.use("/clinic", clinicRoutes)
app.use("/auth", authRoutes)
app.use("/employee", employeeRoutes)
app.use("/patient", patientRoutes)










app.listen(PORT, console.log(`listening on port ${PORT}`))