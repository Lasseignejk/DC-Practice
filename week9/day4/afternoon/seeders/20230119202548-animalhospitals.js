"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert("AnimalHospitals", [
			{
				name: "Meow Medical Center",
				location: "123 Park Avenue, Greenville, SC",
				acceptsExoticAnimals: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Savannah Animal Hospital",
				location: "456 Atlantic Road, Knoxville, TN",
				acceptsExoticAnimals: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Happy Paws Veterinarians",
				location: "789 Beach View Rd., Miami, FL",
				acceptsExoticAnimals: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("AnimalHospitals", null, {});
	},
};
