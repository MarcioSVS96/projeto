'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'question'
      });
    }
  }
  Answer.init({
    text: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
