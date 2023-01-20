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
		await queryInterface.bulkInsert("Pets", [
			{
				name: "Sasha",
				type: "Siberian Husky Dog",
				isExotic: false,
				vetId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Trevor",
				type: "Lion",
				isExotic: true,
				vetId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Lizardon",
				type: "Bearded Dragon Lizard",
				isExotic: false,
				vetId: 4,
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
		await queryInterface.bulkDelete("Pets", null, {});
	},
};
