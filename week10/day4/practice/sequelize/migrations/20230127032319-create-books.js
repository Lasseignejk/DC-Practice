"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Books", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			datePublished: {
				type: Sequelize.STRING,
			},
			cover: {
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
		await queryInterface.dropTable("Books");
	},
};
