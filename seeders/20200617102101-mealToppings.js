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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('toppings', null, {});
  }
};
