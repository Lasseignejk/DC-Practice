"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Events extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Events.belongsTo(models.Authors, {
				foreignKey: "authorId",
				onDelete: "CASCADE",
			});
			Events.belongsToMany(Readers, { through: "Reader_Events" });
		}
	}
	Events.init(
		{
			eventTitle: DataTypes.STRING,
			location: DataTypes.STRING,
			date: DataTypes.STRING,
			time: DataTypes.STRING,
			isFree: DataTypes.BOOLEAN,
			description: DataTypes.STRING,
			authorId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Events",
		}
	);
	return Events;
};
