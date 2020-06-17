'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('fillings', [
      {
        name: 'Chicken',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beef',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pork',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Veggies',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('fillings', null, {});
  }
};