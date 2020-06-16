'use strict';
module.exports = (sequelize, DataTypes) => {
  const filling = sequelize.define('filling', {
    name: DataTypes.STRING
  }, {});
  filling.associate = function(models) {
    filling.hasMany(models.mealComposition)
    // associations can be defined here
  };
  return filling;
};