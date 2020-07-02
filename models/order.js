'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customerPhone: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    delivery: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT,
    totalPrice: DataTypes.FLOAT,
    completed: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    order.hasMany(models.mealComposition)
    // associations can be defined here
  };
  return order;
};