const express = require("express");
const router = express.Router();
const { Vets } = require("../models");

// create a new vet
router.post("/new_vet", async (req, res) => {
	const { firstName, lastName, hospitalId } = req.body;
	const newVet = await Vets.create({
		firstName,
		lastName,
		hospitalId,
		createdAt: new Date(),
		updatedAt: new Date(),
	});
	res.send(newVet);
});

// update a vet
router.put("/update_vet_by_id", async (req, res) => {
	const userUpdateId = req.body.id;
	const userVetFirst = req.body.firstName;
	const userVetLast = req.body.lastName;
	const userVetHospital = req.body.hospitalId;
	await Employees.update(
		{
			firstName: userVetFirst,
			lastName: userVetLast,
			hospitalId: userVetHospital,
		},
		{
			where: {
				id: userUpdateId,
			},
		}
	);
	res.send(`entry ${userUpdateId} was updated.`);
});

// delete a vet
router.delete("/delete_vet_by_id", async (req, res) => {
	const userDeleteId = req.body.id;
	await Vets.destroy({
		where: {
			id: userDeleteId,
		},
	});
	res.send(`entry ${userDeleteId} was deleted.`);
});

// find a vet based on a criteria
router.get("/find_vet_by_id", async (req, res) => {
	const userId = req.body.id;
	const vetId = await Vets.findAll({
		where: {
			id: userId,
		},
	});
	res.send(vetId);
});

// find all vets
router.get("/all_vets", async (req, res) => {
	const allVets = await Vets.findAll();
	res.send(allVets);
});

module.exports = router;
