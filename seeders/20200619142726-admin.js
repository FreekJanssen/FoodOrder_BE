'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('admins', [
        {
          username: 'admin',
          password: '$2b$10$9im5FbT8uUwly.kmD.LnfunQefqTvQBbEP8vzTTdy57Hv2VUl47ky',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('admins', null, {});
  }
};
