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
   await queryInterface.bulkInsert('Patients', [
    {
      firstName: "Pika",
      lastName: "Chu",
      employeeAssignedId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Psy",
      lastName: "Duck",
      employeeAssignedId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Geo",
      lastName: "Dude",
      employeeAssignedId: 6,
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
