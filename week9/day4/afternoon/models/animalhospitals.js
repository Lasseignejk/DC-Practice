"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class AnimalHospitals extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			AnimalHospitals.hasOne(models.Vets, {
				foreignKey: "hospitalId",
			});
		}
	}
	AnimalHospitals.init(
		{
			name: DataTypes.STRING,
			location: DataTypes.STRING,
			acceptsExoticAnimals: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "AnimalHospitals",
		}
	);
	return AnimalHospitals;
};
