'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('meal', {
    name: DataTypes.STRING
  }, {});
  meal.associate = function(models) {
    // associations can be defined here
  };
  return meal;
};