'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      Comment.belongsTo(models.Lesson, {
        foreignKey: 'lessonId',
        as: 'lesson'
      });
    }
  }
  Comment.init({
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
