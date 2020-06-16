'use strict';
module.exports = (sequelize, DataTypes) => {
  const topping = sequelize.define('topping', {
    name: DataTypes.STRING
  }, {});
  topping.associate = function(models) {
    // associations can be defined here
  };
  return topping;
};