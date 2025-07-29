'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Module, {
        foreignKey: 'moduleId',
        as: 'module'
      });

      Lesson.hasMany(models.Comment, {
        foreignKey: 'lessonId',
        as: 'comments'
      });

      Lesson.hasMany(models.Progress, {
        foreignKey: 'lessonId',
        as: 'progresses'
      });
    }
  }
  Lesson.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    videoUrl: DataTypes.STRING,
    moduleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};
