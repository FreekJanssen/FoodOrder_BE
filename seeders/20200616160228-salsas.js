'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('salsas', [
      {
        name: 'Pico de Gallo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiced up Sweetcorn Salsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sweet Chilli Salsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name: 'Scotch Bonnet Hot Salsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pineapple X Cayenne Salsa',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('salsas', null, {});
  }
};