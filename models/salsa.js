'use strict';
module.exports = (sequelize, DataTypes) => {
  const salsa = sequelize.define('salsa', {
    name: DataTypes.STRING
  }, {});
  salsa.associate = function(models) {
    // associations can be defined here
  };
  return salsa;
};