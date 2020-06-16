'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('meals', [
      {
        name: 'Macho Burrito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Naked Burrito Bowl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mama\'s salad bowl',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('meals', null, {});
  }
};
