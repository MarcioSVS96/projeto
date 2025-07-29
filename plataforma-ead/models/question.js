'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Test, {
        foreignKey: 'testId',
        as: 'test'
      });

      Question.hasMany(models.Answer, {
        foreignKey: 'questionId',
        as: 'answers',
        onDelete: 'CASCADE'
      });
    }
  }
  Question.init({
    text: DataTypes.STRING,
    testId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
