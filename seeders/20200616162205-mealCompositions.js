'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mealCompositions', [
      {
        orderId: 1,
        mealId: 1,
        fillingId: 2,
        salsaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        mealId: 3,
        fillingId: 4,
        salsaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        orderId: 2,
        mealId: 2,
        fillingId: 2,
        salsaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        orderId: 2,
        mealId: 1,
        fillingId: 3,
        salsaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        orderId: 2,
        mealId: 2,
        fillingId: 2,
        salsaId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mealCompositions', null, {});
  }
};