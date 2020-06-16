'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerPhone: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      customerAddress: {
        allowNull: true,
        type: Sequelize.STRING
      },
      delivery: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      comment: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      completed: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};