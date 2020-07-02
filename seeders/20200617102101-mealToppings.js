'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mealToppings', [
      {
        mealCompositionId: 1,
        toppingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 1,
        toppingId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 2,
        toppingId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 2,
        toppingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 2,
        toppingId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 3,
        toppingId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 3,
        toppingId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 5,
        toppingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealCompositionId: 5,
        toppingId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('toppings', null, {});
  }
};
