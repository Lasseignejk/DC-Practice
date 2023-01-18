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
   await queryInterface.bulkInsert('Pets',[
    {
    petName: "Sasha",
    petType: "Siberian Husky Dog",
    petOwner: "Dad",
    petAge: "8",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    petName: "Nikkita",
    petType: "Siberian Husky Dog",
    petOwner: "Jaye",
    petAge: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    petName: "Sebastian",
    petType: "Cat",
    petOwner: "Hunter",
    petAge: "2 weeks",
    createdAt: new Date(),
    updatedAt: new Date(),
   }])
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Pets", null, {});
  }
};
