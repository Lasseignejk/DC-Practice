const express = require("express");
const router = express.Router();
const { Pets } = require("../models");

// create a new pet
router.post("/new_pet", async (req, res) => {
	const { name, type, isExotic, vetId } = req.body;
	const newPet = await Pets.create({
		name,
		type,
		isExotic,
		vetId,
		createdAt: new Date(),
		updatedAt: new Date(),
	});
	res.send(newPet);
});

// update a pet
router.put("/update_pet_by_id", async (req, res) => {
	const userUpdateId = req.body.id;
	const userPetName = req.body.name;
	const userPetType = req.body.type;
	const userPetExotic = req.body.isExotic;
	const userPetVet = req.body.vetId;
	await Pets.update(
		{
			name: userPetName,
			type: userPetType,
			isExotic: userPetExotic,
			vetId: userPetVet,
		},
		{
			where: {
				id: userUpdateId,
			},
		}
	);
	res.send(`entry ${userUpdateId} was updated.`);
});

// delete a pet
router.delete("/delete_pet_by_id", async (req, res) => {
	const userDeleteId = req.body.id;
	await Pets.destroy({
		where: {
			id: userDeleteId,
		},
	});
	res.send(`entry ${userDeleteId} was deleted.`);
});

// find one pet based on a criteria
router.get("/find_pet_by_id", async (req, res) => {
	const userId = req.body.id;
	const petId = await Pet.findAll({
		where: {
			id: userId,
		},
	});
	res.send(petId);
});

// find all pets
router.get("/all_pets", async (req, res) => {
	const allPets = await Pets.findAll();
	res.send(allPets);
});

module.exports = router;
