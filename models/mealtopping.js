'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealTopping = sequelize.define('mealTopping', {
    id: DataTypes.INTEGER
  }, {});
  mealTopping.associate = function(models) {
    // associations can be defined here
  };
  return mealTopping;
};