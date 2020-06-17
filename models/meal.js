'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('meal', {
    name: DataTypes.STRING
  }, {});
  meal.associate = function(models) {
    meal.hasMany(models.mealComposition)
    // associations can be defined here
  };
  return meal;
};