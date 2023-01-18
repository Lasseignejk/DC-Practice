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
   await queryInterface.bulkInsert('Employees', [
    {
      firstName: "Ash",
      lastName: "Ketchum",
      clinicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Misty",
      lastName: "Cerulean",
      clinicId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Brock",
      lastName: "Pewter",
      clinicId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
