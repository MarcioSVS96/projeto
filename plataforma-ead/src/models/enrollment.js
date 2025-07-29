'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Enrollment.belongsTo(models.Course, { foreignKey: 'courseId', as: 'course' });
    }
  }

  Enrollment.init({
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollment',
  });

  return Enrollment;
};
