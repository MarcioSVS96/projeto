'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelName extends Model {
    static associate(models) {
      // associações
    }
  }
  ModelName.init({
    // campos
  }, {
    sequelize,
    modelName: 'ModelName',
  });

  return ModelName;
};
