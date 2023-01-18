'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clinics.hasOne(models.Employees, {
        // what's the foreign key on the child table?
        foreignKey: 'clinicId'
      })
    }
  }
  Clinics.init({
    clinicName: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clinics',
  });
  return Clinics;
};