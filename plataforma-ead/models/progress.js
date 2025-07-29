'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    static associate(models) {
      Progress.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      Progress.belongsTo(models.Course, {
        foreignKey: 'courseId',
        as: 'course'
      });

      Progress.belongsTo(models.Module, {
        foreignKey: 'moduleId',
        as: 'module'
      });

      Progress.belongsTo(models.Lesson, {
        foreignKey: 'lessonId',
        as: 'lesson'
      });
    }
  }
  Progress.init({
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    moduleId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};
