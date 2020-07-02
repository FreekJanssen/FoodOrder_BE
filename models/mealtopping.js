module.exports = (sequelize, DataTypes) => {
  const mealTopping = sequelize.define('mealTopping', {
    mealCompositionId: { type: DataTypes.INTEGER, primaryKey: true },
    toppingId: { type: DataTypes.INTEGER, primaryKey: true }
  }, {});
  mealTopping.associate = function(models) {
    // associations can be defined here
  };
  return mealTopping;
};