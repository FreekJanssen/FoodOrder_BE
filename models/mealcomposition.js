'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealComposition = sequelize.define('mealComposition', {
    id: DataTypes.INTEGER
  }, {});
  mealComposition.associate = function(models) {
    // associations can be defined here
  };
  return mealComposition;
};