"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Events", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			eventTitle: {
				type: Sequelize.STRING,
			},
			location: {
				type: Sequelize.STRING,
			},
			date: {
				type: Sequelize.STRING,
			},
			time: {
				type: Sequelize.STRING,
			},
			isFree: {
				type: Sequelize.BOOLEAN,
			},
			description: {
				type: Sequelize.STRING,
			},
			authorId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Authors",
					key: "id",
					as: "authorId",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Events");
	},
};
