'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('admins', [
        {
          username: 'admin',
          password: 'admin1337',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('admins', null, {});
  }
};
