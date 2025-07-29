'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate(models) {
      Module.belongsTo(models.Course, {
        foreignKey: 'courseId',
        as: 'course'
      });

      Module.hasMany(models.Lesson, {
        foreignKey: 'moduleId',
        as: 'lessons',
        onDelete: 'CASCADE'
      });

      Module.hasOne(models.Test, {
        foreignKey: 'moduleId',
        as: 'test',
        onDelete: 'CASCADE'
      });

      Module.hasMany(models.Progress, {
        foreignKey: 'moduleId',
        as: 'progresses'
      });
    }
  }
  Module.init({
    title: DataTypes.STRING,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};
