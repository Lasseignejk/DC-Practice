"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Vets extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Vets.belongsTo(models.AnimalHospitals, {
				foreignKey: "hospitalId",
				onDelete: "CASCADE",
			});
			Vets.hasOne(models.Pets, {
				foreignKey: "vetId",
			});
		}
	}
	Vets.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			hospitalId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Vets",
		}
	);
	return Vets;
};
