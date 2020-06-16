'use strict';
module.exports = (sequelize, DataTypes) => {
  const filling = sequelize.define('filling', {
    name: DataTypes.STRING
  }, {});
  filling.associate = function(models) {
    // associations can be defined here
  };
  return filling;
};