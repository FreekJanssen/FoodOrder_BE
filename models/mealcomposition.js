'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealComposition = sequelize.define('mealComposition', {
    orderId: DataTypes.INTEGER,
    fillingId: DataTypes.INTEGER,
    salsaId: DataTypes. INTEGER,
    mealId: DataTypes.INTEGER
  }, {});
  mealComposition.associate = function(models) {
    mealComposition.belongsTo(models.meal)
    mealComposition.belongsTo(models.filling)
    mealComposition.belongsTo(models.salsa)
    mealComposition.belongsTo(models.order)
    mealComposition.belongsToMany(models.topping, { through: 'mealToppings' });
    // associations can be defined here
  };
  return mealComposition;
};