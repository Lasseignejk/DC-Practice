const express = require("express");
const { Op } = require("sequelize");

const app = express();
const animalHospitalRoutes = require("./routes/animalHospitalRoutes");
const vetRoutes = require("./routes/vetRoutes");
const petRoutes = require("./routes/petRoutes");

const PORT = 3014;

app.use(express.json());

app.use("/hospital", animalHospitalRoutes);
app.use("/vet", vetRoutes);
app.use("/pet", petRoutes);

app.listen(PORT, console.log(`listening on port ${PORT}`));
