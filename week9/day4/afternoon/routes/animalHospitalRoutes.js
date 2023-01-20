const express = require("express");
const router = express.Router();
const { AnimalHospitals } = require("../models");

// create a new hospital
router.post("/new_hospital", async (req, res) => {
	const { name, location, acceptsExoticAnimals } = req.body;
	const newHospital = await AnimalHospitals.create({
		name,
		location,
		acceptsExoticAnimals,
		createdAt: new Date(),
		updatedAt: new Date(),
	});
	res.send(newHospital);
});

// update a hospital
router.put("/update_hospital_by_id", async (req, res) => {
	const userUpdateId = req.body.id;
	const userHospitalLocation = req.body.location;
	const userHospitalName = req.body.name;
	const userHospitalExotics = req.body.acceptsExoticAnimals;
	await AnimalHospitals.update(
		{
			name: userHospitalName,
			location: userHospitalLocation,
			acceptsExoticAnimals: userHospitalExotics,
		},
		{
			where: {
				id: userUpdateId,
			},
		}
	);
	res.send(`entry ${userUpdateId} was updated.`);
});

// delete a hospital
router.delete("/delete_hospital_by_id", async (req, res) => {
	const userDeleteId = req.body.id;
	await AnimalHospitals.destroy({
		where: {
			id: userDeleteId,
		},
	});
	res.send(`entry ${userDeleteId} was deleted.`);
});

// find one hospital based on a criteria
router.get("/find_hospital_by_id", async (req, res) => {
	const userId = req.body.id;
	const hospitalId = await AnimalHospitals.findAll({
		where: {
			id: userId,
		},
	});
	res.send(hospitalId);
});

// find all hospitals
router.get("/all_hospitals", async (req, res) => {
	const allHospitals = await AnimalHospitals.findAll();
	res.send(allHospitals);
});

module.exports = router;
