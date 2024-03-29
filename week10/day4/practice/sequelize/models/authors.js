"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Authors extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Authors.hasMany(models.Books, {
				foreignKey: "authorId",
			});
			Authors.hasMany(models.Events, {
				foreignKey: "authorId",
			});
		}
	}
	Authors.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			funFact: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Authors",
		}
	);
	return Authors;
};
