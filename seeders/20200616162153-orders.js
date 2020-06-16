'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        customerPhone: 612345678,
        customerAddress: 'Hoofdstraat 12',
        delivery: true,
        comment: 'kloppen want de bel doet het niet',
        totalPrice: 19.80,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customerPhone: 699999999,
        customerAddress: 'Parklaan 29B',
        delivery: true,
        comment: 'kloppen want de bel doet het niet',
        totalPrice: 29.70,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};