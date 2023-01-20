"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Pets extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Pets.belongsTo(models.Vets, {
				foreignKey: "vetId",
				onDelete: "CASCADE",
			});
		}
	}
	Pets.init(
		{
			name: DataTypes.STRING,
			type: DataTypes.STRING,
			isExotic: DataTypes.BOOLEAN,
			vetId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Pets",
		}
	);
	return Pets;
};
