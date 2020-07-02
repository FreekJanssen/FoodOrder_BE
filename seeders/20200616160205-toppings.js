'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('toppings', [
      {
        name: 'Sour Cream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Geraspte Kaas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sla',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name: 'Mais',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jalapeno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koriander',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guacamole',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('toppings', null, {});
  }
};
