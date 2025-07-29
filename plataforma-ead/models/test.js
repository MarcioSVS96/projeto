'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {
      Test.belongsTo(models.Module, {
        foreignKey: 'moduleId',
        as: 'module'
      });

      Test.hasMany(models.Question, {
        foreignKey: 'testId',
        as: 'questions',
        onDelete: 'CASCADE'
      });
    }
  }
  Test.init({
    title: DataTypes.STRING,
    moduleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
