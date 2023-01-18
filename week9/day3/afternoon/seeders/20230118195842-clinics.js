'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Clinics', [
    {
      clinicName: "Pallet Town Clinic",
      location: "Pallet Town",
      size: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      clinicName: "Cerulean City Clinic",
      location: "Cerulean City",
      size: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      clinicName: "Pewter City Clinic",
      location: "Pewter City",
      size: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
